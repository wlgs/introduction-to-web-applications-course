import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dishrate',
  templateUrl: './dishrate.component.html',
  styleUrls: ['./dishrate.component.css'],
})
export class DishrateComponent implements OnInit {
  constructor() {}


  @Output() newReviewEvent = new EventEmitter<review>();


  reviews: review[] = [];
  errorArray: any[] = [];

  addReview = new FormGroup({
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    date: new FormControl('', [Validators.required]),
    review: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(300),
    ]),
  });

  submitForm() {
    let newReview = ({
      nick: this.addReview.get('nickname')!.value,
      date: this.addReview.get('date')!.value,
      review: this.addReview.get('review')!.value,
    } as review);
    this.newReviewEvent.emit(newReview)
    this.addReview.reset();
  }

  ngOnInit(): void {}
}

interface review {
  nick: string;
  date: string;
  review: string;
}
