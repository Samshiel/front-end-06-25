import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutoService } from '../../services/auto.service';

@Component({
  selector: 'app-autod',
  imports: [RouterLink],
  templateUrl: './autod.component.html',
  styleUrl: './autod.component.css'
})
export class AutodComponent implements OnInit {
autod: string[] = []; 
autodCopy = this.autod;

constructor(private autoService: AutoService) {}

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
  this.autod = this.autoService.autod.sort((auto_a, auto_b) => auto_a.length - auto_b.length);
}

sorteeriSuurim() {
  this.autod = this.autoService.autod.sort((auto_a, auto_b) => auto_b.length - auto_a.length);
}

sorteerikolmasAZ() {
  // auto_a[2] auto_a.at(2)
  this.autod = this.autoService.autod.sort((auto_a, auto_b) => auto_a.charAt(2).localeCompare(auto_b.charAt(2)));
}

filtreeriIgaLoppevad() {
  //endsWith("i")
  this.autod = this.autoService.autod.filter(auto => auto[auto.length - 1] === "i");
}

filtreeri6Tahelised() {
  this.autod = this.autoService.autod.filter(auto => auto.length === 6)
}

filtreeriKuni7Tahelised() {
  this.autod = this.autoService.autod.filter(auto => auto.length <= 7)
}

filtreeriLyhendEs() {
  this.autod = this.autoService.autod.filter(auto => auto.includes("es"))
}
 
filtreeriTeineTahtE() {
  this.autod = this.autoService.autod.filter(auto => auto[1] === "e")
}

}
