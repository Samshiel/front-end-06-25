import { Component, OnInit } from '@angular/core';
import { TarnijaService } from '../../services/tarnija.service';
import { Product } from '../../models/protuct';

@Component({
  selector: 'app-tarnija1',
  imports: [],
  templateUrl: './tarnija1.component.html',
  styleUrl: './tarnija1.component.css'
})
export class Tarnija1Component implements OnInit{
  products: Product[] = [];

  constructor(
    private tarnijaService: TarnijaService
  ) {

  }

  ngOnInit(): void {
    this.tarnijaService.teeApiParing("https://fakestoreapi.com/products").subscribe(vastus => {
      this.products = vastus;
    });
  }
}
