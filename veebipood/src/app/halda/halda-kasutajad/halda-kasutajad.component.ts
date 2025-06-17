import { Component, OnInit } from '@angular/core';
import { KasutajaService } from '../../services/kasutaja.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-halda-kasutajad',
  imports: [FormsModule],
  templateUrl: './halda-kasutajad.component.html',
  styleUrl: './halda-kasutajad.component.css'
})
export class HaldaKasutajadComponent implements OnInit {
  constructor(private kasutajaService: KasutajaService) {}

  ngOnInit(): void {
    this.kasutajad = this.kasutajaService.kasutajad;
  }

  kasutajad: { email: string; parool: string; }[] = [];
  kasutaja = {
      email: "000@hotmail.com",
      parool: "000"
  };

  lisa() {
    this.kasutajad.push(this.kasutaja);
  }

  kustuta(i: number) {
    this.kasutajad.splice(i, 1);
  }
}
