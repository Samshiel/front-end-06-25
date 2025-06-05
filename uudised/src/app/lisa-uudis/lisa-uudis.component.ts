import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-uudis',
  imports: [FormsModule],
  templateUrl: './lisa-uudis.component.html',
  styleUrl: './lisa-uudis.component.css'
})
export class LisaUudisComponent {
  uudis = "";

  kuvaUudis() {
    if(this.uudis.length < 5) {
      alert("Uudis ei tohi olla vähem kui 5 tähemärki");
    } else {
      alert(this.uudis);
    }
  }
}
