import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models';

@Component({
  selector: 'app-manage-products',
  imports: [],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  delete(index: number) {
    this.products.splice(index, 1);
  }
}
