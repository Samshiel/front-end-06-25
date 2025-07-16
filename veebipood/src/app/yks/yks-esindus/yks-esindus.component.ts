import { Component, OnInit } from '@angular/core';
import { Esindus } from '../../models/esindus';
import { EsindusService } from '../../services/esindus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yks-esindus',
  imports: [],
  templateUrl: './yks-esindus.component.html',
  styleUrl: './yks-esindus.component.css'
})
export class YksEsindusComponent implements OnInit {
  esindus!: Esindus; //Hüüumärk --- alguses väärtust ei anna 

  constructor(
    private esindusService: EsindusService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get("index");
    const leitud = this.esindusService.tallinnaEsindused[Number(index)]
    if(leitud) {
      this.esindus = leitud;
    }
  }


}
