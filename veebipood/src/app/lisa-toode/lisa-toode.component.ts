import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AutoService } from '../services/auto.service';

@Component({
  selector: 'app-lisa-toode',
  imports: [FormsModule, MatButtonModule], //inputi väärtusi lugeda (ngMOdel)
  templateUrl: './lisa-toode.component.html',
  styleUrl: './lisa-toode.component.css'
})
export class LisaToodeComponent {
  constructor(private autoService: AutoService) {}

  lisa(toodeVorm: NgForm) {
    if(toodeVorm.value.nimi === "") {
      alert("Tühja nimetusega toodet ei saa lisada");
    } else {
      alert("Toode lisatud: " + toodeVorm.value.nimi);
      this.autoService.autod.push(toodeVorm.value);
    }
  }
}
