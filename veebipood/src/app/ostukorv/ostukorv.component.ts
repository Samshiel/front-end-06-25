import { Component, OnInit } from '@angular/core';
import { OstukorvService } from '../services/ostukorv.service';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent implements OnInit{
  tooted: { nimi: string; hind: number; aktiivne: boolean; pilt: string; }[] = [];

  // constructor(private ostuKorvService: OstukorvService) {}

  ngOnInit(): void {
    // this.tooted = this.ostuKorvService.ostukorv;
    this.tooted = JSON.parse(localStorage.getItem("ostukorv")|| "[]");
  }

  kustuta(i: number) {
    this.tooted.splice(i, 1);
    localStorage.setItem("osukorv", JSON.stringify(this.tooted));
  }

  empty() {
    this.tooted = [];
    localStorage.setItem("osukorv", JSON.stringify(this.tooted));
  }

  arvutaKogusumma() {
    let summa = 0;
    this.tooted.forEach(toode => summa = summa + toode.hind);
    return summa;
  }
}
