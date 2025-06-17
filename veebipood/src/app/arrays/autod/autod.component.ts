import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutoService } from '../../services/auto.service';
import { OstukorvService } from '../../services/ostukorv.service';

@Component({
  selector: 'app-autod',
  imports: [RouterLink],
  templateUrl: './autod.component.html',
  styleUrl: './autod.component.css'
})
export class AutodComponent implements OnInit {
autod: { nimi: string; hind: number; aktiivne: boolean; pilt: string; }[] = []; 
autodCopy = this.autod;

constructor(
  private autoService: AutoService,
  private ostukorService: OstukorvService
) {}

ngOnInit() {
  this.autod = this.autoService.autod.slice();
}

reset() {
  this.autod = this.autoService.autod.slice();
}

sorteeriAZ() {
  this.autod = this.autoService.autod.sort();
}

sorteeriZA() {
  this.autod = this.autoService.autod.sort().reverse();
}

sorteeriVaiksem() {
  this.autod = this.autoService.autod.sort((auto_a, auto_b) => auto_a.nimi.length - auto_b.nimi.length);
}

sorteeriSuurim() {
  this.autod = this.autoService.autod.sort((auto_a, auto_b) => auto_b.nimi.length - auto_a.nimi.length);
}

sorteerikolmasAZ() {
  // auto_a[2] auto_a.at(2)
  this.autod = this.autoService.autod.sort((auto_a, auto_b) => auto_a.nimi.charAt(2).localeCompare(auto_b.nimi.charAt(2)));
}

filtreeriIgaLoppevad() {
  //endsWith("i")
  this.autod = this.autoService.autod.filter(auto => auto.nimi[auto.nimi.length - 1] === "i");
}

filtreeri6Tahelised() {
  this.autod = this.autoService.autod.filter(auto => auto.nimi.length === 6)
}

filtreeriKuni7Tahelised() {
  this.autod = this.autoService.autod.filter(auto => auto.nimi.length <= 7)
}

filtreeriLyhendEs() {
  this.autod = this.autoService.autod.filter(auto => auto.nimi.includes("es"))
}
 
filtreeriTeineTahtE() {
  this.autod = this.autoService.autod.filter(auto => auto.nimi[1] === "e")
}

lisaOstuKorvi(auto: any) {
  this.ostukorService.ostukorv.push(auto);
}

}
