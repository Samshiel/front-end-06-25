import { Component, OnInit } from '@angular/core';
import { TarnijaService } from '../../services/tarnija.service';

@Component({
  selector: 'app-tarnija2',
  imports: [],
  templateUrl: './tarnija2.component.html',
  styleUrl: './tarnija2.component.css'
})
export class Tarnija2Component implements OnInit {
  products!: any[];

  constructor(
    private tarnijaService: TarnijaService
  ) {}

  ngOnInit(): void {
    this.tarnijaService.teeApiParing("https://api.escuelajs.co/api/v1/products").subscribe(vastus => {
      this.products = vastus;
    });
  }
}
