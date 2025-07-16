import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home-page-filters',
  imports: [],
  templateUrl: './home-page-filters.component.html',
  styleUrl: './home-page-filters.component.css'
})
export class HomePageFiltersComponent implements OnInit {
    constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }
  products: Product[] = [];
  
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
