import { Component } from '@angular/core';
import { KasutajaService } from '../../services/kasutaja.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yks-kasutaja',
  imports: [],
  templateUrl: './yks-kasutaja.component.html',
  styleUrl: './yks-kasutaja.component.css'
})
export class YksKasutajaComponent {
  kasutaja!: { email: string; parool: string; };

  constructor(
    private kasutajaService: KasutajaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get("email");
    const leitud = this.kasutajaService.kasutajad.find(kasutaja => kasutaja.email === email);
    if(leitud) {
      this.kasutaja = leitud;
    }
  }
}
