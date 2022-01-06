import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-dish-rating',
  templateUrl: './dish-rating.component.html',
  styleUrls: ['./dish-rating.component.css'],
})
export class DishRatingComponent implements OnInit {
  constructor() {}
  @Output() ratingChanged = new EventEmitter<number>();

  @Input() dishLikes = 0;
  @Input() dishDislikes = 0;

  alreadyVoted = false;
  ngOnInit(): void {}

  rattingApplied(op: string) {
    if (this.alreadyVoted) return;
    if (op == '+') this.ratingChanged.emit(1);
    else this.ratingChanged.emit(-1);
    this.alreadyVoted = true;
  }
}
