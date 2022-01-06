import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FireBaseServiceService } from '../fire-base-service.service';
import { Dish } from '../IDish';
@Component({
  selector: 'app-dish-add',
  templateUrl: './dish-add.component.html',
  styleUrls: ['./dish-add.component.css'],
})
export class DishAddComponent implements OnInit {
  constructor(private fb: FireBaseServiceService, private auth: AuthService) {}

  ngOnInit(): void {}

  dishAddForm = new FormGroup({
    dishname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    dishtype: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    dishcategory: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    dishingredients: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    dishmaxperday: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*'),
    ]),
    dishprice: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*.?[0-9]+'),
    ]),
    dishshortdesc: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    dishimagelink: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  showError = false;
  showOk = false;

  submitForm() {
    if (!this.auth.userRoles.menager) return;
    console.log(this.dishAddForm);
    console.log(this.dishAddForm.valid);
    if (!this.dishAddForm.valid) {
      this.showError = true;
      return;
    }
    let newDish = {
      id: this.fb.getNextid(),
      name: this.dishAddForm.get('dishname')!.value,
      type: this.dishAddForm.get('dishtype')!.value,
      category: this.dishAddForm.get('dishcategory')!.value,
      ingredients: this.dishAddForm.get('dishingredients')!.value,
      maxperday: this.dishAddForm.get('dishmaxperday')!.value,
      price: parseFloat(this.dishAddForm.get('dishprice')!.value),
      shortdesc: this.dishAddForm.get('dishshortdesc')!.value,
      imagelink: new Array<string>(
        this.dishAddForm.get('dishimagelink')!.value
      ),
      amount: 0,
      currency: '$',
      likes: 0,
      dislikes: 0,
    } as Dish;
    this.fb.addDish(newDish);
    this.showError = false;
    this.showOk = true;
    this.dishAddForm.reset();
  }
}
