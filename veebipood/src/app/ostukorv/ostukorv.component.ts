import { Component, OnInit } from '@angular/core';
import { OstukorvService } from '../services/ostukorv.service';
import { PakiautomaatService } from '../services/pakiautomaat.service';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent implements OnInit{
  tooted: { nimi: string; hind: number; aktiivne: boolean; pilt: string; }[] = [];
  pakiautomaadid: any[] = [];

  constructor(private pakiAutomaatService: PakiautomaatService) {}

  ngOnInit(): void {
    // this.tooted = this.ostuKorvService.ostukorv;
    this.tooted = JSON.parse(localStorage.getItem("ostukorv")|| "[]");
    this.pakiAutomaatService.saaPakiAutomaadid().subscribe(vastus => {
      this.pakiautomaadid = vastus.filter((automaat: { A0_NAME: string; }) => automaat.A0_NAME === "EE");
      console.log(this.pakiautomaadid);
    });
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
