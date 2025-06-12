import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lisa-toode',
  imports: [FormsModule, MatButtonModule], //inputi väärtusi lugeda (ngMOdel)
  templateUrl: './lisa-toode.component.html',
  styleUrl: './lisa-toode.component.css'
})
export class LisaToodeComponent {
  toode = "";

  lisa() {
    if(this.toode === "") {
      alert("Tühja nimetusega toodet ei saa lisada");
    } else {
      alert("Toode lisatud: " + this.toode);
      this.toode = "";
    }
  }
}
