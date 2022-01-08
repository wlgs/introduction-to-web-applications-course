import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { FireBaseServiceService } from '../fire-base-service.service';

@Component({
  selector: 'app-modify-dish',
  templateUrl: './modify-dish.component.html',
  styleUrls: ['./modify-dish.component.css'],
})
export class ModifyDishComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private fb: FireBaseServiceService,
    private router: Router
  ) {}

  id: any = null;
  dish: any = null;
  subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.fb
    .getDishes()
    .pipe(first())
    .subscribe((dishes: any[]) => {
      for (let d of dishes) {
        if (d.id == this.id) {
          this.dishModifyForm.patchValue(d)
          break;
        }
      }})
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  dishModifyForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    Type: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    Category: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    Ingredients: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    MaxPerDay: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*'),
    ]),
    Price: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*.?[0-9]+'),
    ]),
    ShortDesc: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    ImageLink: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  showError = false;
  showOk = false;



  getFormValidationErrors(form: any) {
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
         console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  submitForm() {
    if (!this.dishModifyForm.valid) {
      this.showError = true;
      return;
    }
    this.fb
      .getDishes()
      .pipe(first())
      .subscribe((dishes: any[]) => {
        let dish: any;
        for (let d of dishes) {
          if (d.id == this.id) {
            dish = d;
            break;
          }
        }
        let dataToUpdate = {
          Name: this.dishModifyForm.get('Name')!.value,
          Type: this.dishModifyForm.get('Type')!.value,
          Category: this.dishModifyForm.get('Category')!.value,
          Ingredients: this.dishModifyForm.get('Ingredients')!.value,
          MaxPerDay: this.dishModifyForm.get('MaxPerDay')!.value,
          Price: parseFloat(this.dishModifyForm.get('Price')!.value),
          ShortDesc: this.dishModifyForm.get('ShortDesc')!.value,
          ImageLink: new Array<string>(
            this.dishModifyForm.get('ImageLink')!.value
          ),
        };
        try{
          this.fb.updateDish(dataToUpdate, this.id)
        }catch(err){
          window.alert(err)
        }
        this.showError = false;
        this.showOk = true;
        this.dishModifyForm.reset();
      });
    this.router.navigate(['/menager/'])
  }
}
