import { Component, OnInit } from '@angular/core';
import { KasutajaService } from '../../services/kasutaja.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  kasutaja =  { email: "", parool: "" };
  sisselogitud = false;

  constructor(
    private kasutajaService: KasutajaService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sisselogitud = this.kasutajaService.sisseLogitud;
  }

  logiSisse() {
    const leitudKasutaja = this.kasutajaService.kasutajad.find(kasutajaService => kasutajaService.email === this.kasutaja.email);
    if(!leitudKasutaja) {
      alert("Sellise emailiga kasutaja puudub!")
      return;
    } else if (leitudKasutaja.parool !== this.kasutaja.parool) {
      alert("Vale Parool!")
      return;
    }
    alert("Sisse logitud");
    this.kasutajaService.sisseLogitud = true;
    this.router.navigate(["/"])
  }
}
