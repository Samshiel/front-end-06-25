import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kinkekaardid',
  imports: [FormsModule], //Importida [(ngModel)]
  templateUrl: './kinkekaardid.component.html',
  styleUrl: './kinkekaardid.component.css'
})
export class KinkekaardidComponent {
  summa = 20;
  kogus = 1;
  email = "";

  sisesta() {
    if(this.email === "") {
      alert("Email ei saa tühi olla!");
      return;
    }

    if(this.email.includes("@") === false) {
      alert("Email peab sisaldama @ sümbolit!");
      return;
    }

    alert("Edukalt lisatud: " + this.email);
  }
}
