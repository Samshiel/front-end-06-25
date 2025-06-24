import { Component, OnInit } from '@angular/core';
import { KasutajaService } from '../../services/kasutaja.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kasutajad',
  imports: [RouterModule],
  templateUrl: './kasutajad.component.html',
  styleUrl: './kasutajad.component.css'
})
export class KasutajadComponent implements OnInit {
  kasutajad: { email: string; parool: string; }[] = [];

  constructor(private kasutajaService: KasutajaService) { 
  }

  ngOnInit(): void {
    this.kasutajad = this.kasutajaService.kasutajad
  }
}
