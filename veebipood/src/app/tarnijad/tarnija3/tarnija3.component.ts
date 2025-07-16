import { Component, OnInit } from '@angular/core';
import { TarnijaService } from '../../services/tarnija.service';

@Component({
  selector: 'app-tarnija3',
  imports: [],
  templateUrl: './tarnija3.component.html',
  styleUrl: './tarnija3.component.css'
})
export class Tarnija3Component implements OnInit {
    products!: any[];
  
    constructor(
      private tarnijaService: TarnijaService
    ) {}
  
    ngOnInit(): void {
      this.tarnijaService.teeApiParing("https://api.itbook.store/1.0/search/angular?page=0").subscribe(vastus => {
        this.products = vastus.books;
        console.log(this.products);
      });
    }
}
