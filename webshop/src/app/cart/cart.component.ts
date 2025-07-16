import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  totalCost: number = 0;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cart.forEach(item => this.totalCost += item.price)
  }

  removeItem(index: number) {
    this.cart[index].active = false;
    this.cart.splice(index, 1);
  }

  emptyCart() {
    this.cart = [];
  }
}
