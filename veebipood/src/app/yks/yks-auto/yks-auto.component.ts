import { Component, OnInit } from '@angular/core';
import { Toode } from '../../models/toode';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yks-auto',
  imports: [],
  templateUrl: './yks-auto.component.html',
  styleUrl: './yks-auto.component.css'
})
export class YksAutoComponent implements OnInit{
  auto!: Toode; //Hüüumärk --- alguses väärtust ei anna 

  constructor(
    private autoService: AutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const autoNimi = this.route.snapshot.paramMap.get("mark");
    const leitud = this.autoService.autod.find(auto => auto.nimi === autoNimi);
    if(leitud) {
      this.auto = leitud;
    }
  }


}
