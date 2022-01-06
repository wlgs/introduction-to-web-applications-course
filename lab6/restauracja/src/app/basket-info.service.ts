import { Injectable } from '@angular/core';
import { Dish } from './IDish';

@Injectable({
  providedIn: 'root',
})
export class BasketInfoService {
  constructor() {}

  basket: Dish[] = [];
}
