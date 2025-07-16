import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomePageFiltersComponent } from "../home-page-filters/home-page-filters.component";

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule, HomePageFiltersComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];
  holdTimeout: any;
  searchKeyWord: string = ""

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.products;
    const cartIds = this.cartService.cart.map(item => item.id);
    this.products.forEach(product => {
      product.active = cartIds.includes(product.id);
    });
  }

  toggleProduct(index: number): void {
    const product =  this.products[index];
    if(product.active) {
      product.active = false;
      this.cartService.removeFromCart(product.id);
      return;
    }
    product.active = true;
    this.cartService.addToCart(product);
  }

  goToSingleProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  startHold(productId: number): void {
    this.holdTimeout = setTimeout(() => {
      this.goToSingleProduct(productId);
    }, 500);
  }

  cancelHold(): void {
    if (this.holdTimeout) {
      clearTimeout(this.holdTimeout);
      this.holdTimeout = null;
    }
  }

  search() {
    if (!this.searchKeyWord) {
      this.products = this.productService.products;
    }
    this.products = this.products.filter(product => product.title.toLowerCase().includes(this.searchKeyWord.toLocaleLowerCase()));
  }

  sortAZ() {
    this.products.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortZA() {
    this.products.sort((a, b) => b.title.localeCompare(a.title));
  }

  sortPrice(down: boolean) {
    if (down) {
      this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products.sort((a, b) => b.price - a.price);
    }
  }

  sortRating(down: boolean) {
    if (down) {
      this.products.sort((a, b) => a.rating.rate - b.rating.rate);
    } else {
      this.products.sort((a, b) => b.rating.rate - a.rating.rate);
    }
  }
}
