import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KasutajaService } from '../../services/kasutaja.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login3',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login3.component.html',
  styleUrl: './login3.component.css'
})
export class Login3Component {
  loginForm!: FormGroup;
  sisselogitud = false;

  constructor(
    private kasutajaService: KasutajaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      parool: new FormControl()
    });
    this.kasutajaService.sisseLogitud.subscribe(vastus => {
      this.sisselogitud = vastus;
    });
  }

  logiSisse() {
    const leitudKasutaja = this.kasutajaService.kasutajad.find(kasutajaService => kasutajaService.email === this.loginForm.value.email);
    if(!leitudKasutaja) {
      alert("Sellise emailiga kasutaja puudub!")
      return;
    } else if (leitudKasutaja.parool !== this.loginForm.value.parool) {
      alert("Vale Parool!")
      return;
    }
    alert("Sisse logitud");
    sessionStorage.setItem("token", this.loginForm.value.email);
    this.kasutajaService.sisseLogitud.next(true);
    this.router.navigate(["/"])
  }
}
