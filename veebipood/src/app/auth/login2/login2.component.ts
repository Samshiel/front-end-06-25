import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { KasutajaService } from '../../services/kasutaja.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  imports: [FormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component implements OnInit {
  sisselogitud = false;

  constructor(
    private kasutajaService: KasutajaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.kasutajaService.sisseLogitud.subscribe(vastus => {
      this.sisselogitud = vastus;
    });
  }

  logiSisse(loginVorm: NgForm) {
    const leitudKasutaja = this.kasutajaService.kasutajad.find(kasutajaService => kasutajaService.email === loginVorm.value.email);
    if(!leitudKasutaja) {
      alert("Sellise emailiga kasutaja puudub!")
      return;
    } else if (leitudKasutaja.parool !== loginVorm.value.parool) {
      alert("Vale Parool!")
      return;
    }
    alert("Sisse logitud");
    sessionStorage.setItem("token", loginVorm.value.email);
    this.kasutajaService.sisseLogitud.next(true);
    this.router.navigate(["/"])
  }
}
