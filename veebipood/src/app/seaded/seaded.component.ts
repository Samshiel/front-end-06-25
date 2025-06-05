import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seaded',
  imports: [FormsModule],
  templateUrl: './seaded.component.html',
  styleUrl: './seaded.component.css'
})
export class SeadedComponent {
  keel = "et";
  aadress = "";
  email = "";
  telefon = "+372"

  muudaKeel(uusKeel: string) {
    this.keel = uusKeel;
  }

  sisesta(tekst: string) {
    
  }
}
