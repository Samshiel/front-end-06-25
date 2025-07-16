import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    this.saveCart();
  }

  removeFromCart(productId: number): void {
    const index = this.cart.findIndex(item => item.id === productId);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
