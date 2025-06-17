import { Component, OnInit } from '@angular/core';
import { KasutajaService } from '../../services/kasutaja.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  imports: [FormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  parooliKordus = "";
  kasutaja =  { email: "", parool: "" };

  constructor(
    private kasutajaService: KasutajaService,
    private router: Router
  ) {}

  lisa() {
    if(this.kasutaja.parool !== this.parooliKordus) {
      alert("Paroolid ei ühti!");
      return;
    }
    this.kasutajaService.kasutajad.push(this.kasutaja);
    //this.kasutaja =  { email: "", parool: "" }; suuname ära
    this.router.navigate(["/"])
  }
}
