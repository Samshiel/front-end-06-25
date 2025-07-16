import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoService } from '../../services/auto.service';
import { Toode } from '../../models/toode';
import { RouterLink } from '@angular/router';
import { ShortenerPipe } from '../../pipes/shortener.pipe';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-halda-autod',
  imports: [FormsModule, RouterLink, ShortenerPipe, PricePipe],
  templateUrl: './halda-autod.component.html',
  styleUrl: './halda-autod.component.css'
})
export class HaldaAutodComponent implements OnInit {  
  autod: Toode[] = [];
  auto = { nimi: "", hind: 0, aktiivne: false, pilt: "" };
  nuppAktiivne = false;

  constructor(private autoService: AutoService) {
    //Failiühenduse jaoks
  }

  ngOnInit(): void {
    this.autod = this.autoService.autod
  }

  lisa() {
    if(this.auto.nimi.length === 0) {
      alert("Auto nimi ei saa olla tühi!")
      return;
    }
    this.autod.push(this.auto);
    this.auto = { nimi: "", hind: 0, aktiivne: false, pilt: "" };
  }

  kustuta(i: number) {
    this.autod.splice(i, 1);
  }

  kasUnikaalne(): void {
    this.nuppAktiivne = !!this.autod.find(auto => auto.nimi.toLowerCase() === this.auto.nimi.toLowerCase())
  }
}
