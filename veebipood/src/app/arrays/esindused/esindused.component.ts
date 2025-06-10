import { Component, OnInit } from '@angular/core';
import { EsindusService } from '../../services/esindus.service';

@Component({
  selector: 'app-esindused',
  imports: [],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent implements OnInit {
  constructor(private esindusService: EsindusService) {
  }

  tallinnaEsindused: string[] = [];
  linn = "Tallinn";

  ngOnInit(): void {
    this.tallinnaEsindused = this.esindusService.tallinnaEsindused;
  }
}
