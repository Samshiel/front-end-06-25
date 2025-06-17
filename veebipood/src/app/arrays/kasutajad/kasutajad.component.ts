import { Component, OnInit } from '@angular/core';
import { KasutajaService } from '../../services/kasutaja.service';

@Component({
  selector: 'app-kasutajad',
  imports: [],
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
