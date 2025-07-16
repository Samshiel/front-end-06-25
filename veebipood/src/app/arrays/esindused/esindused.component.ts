import { Component, OnInit } from '@angular/core';
import { EsindusService } from '../../services/esindus.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-esindused',
  imports: [RouterLink],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent implements OnInit {
  constructor(private esindusService: EsindusService) {
  }

  tallinnaEsindused: { keskus: string; telefon: string; aadress: string; }[] = [];
  linn = "Tallinn";

  ngOnInit(): void {
    this.tallinnaEsindused = this.esindusService.tallinnaEsindused;
  }
}
