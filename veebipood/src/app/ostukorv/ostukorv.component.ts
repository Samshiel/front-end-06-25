import { Component } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent {
  tooted = ["Coca", "Fanta", "Sprite"];

  kustuta(i: number) {
    this.tooted.splice(i, 1);
  }

  arvutaKogusumma() {
    let summa = 0;
    this.tooted.forEach(toode => summa = summa + toode.length)
    return summa;
  }
}
