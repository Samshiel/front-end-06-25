import { Component, OnInit } from '@angular/core';
import { Toode } from '../../models/toode';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-muuda-auto',
  imports: [],
  templateUrl: './muuda-auto.component.html',
  styleUrl: './muuda-auto.component.css'
})
export class MuudaAutoComponent implements OnInit {
  auto !: Toode;

  constructor(
    private autoService: AutoService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get("index");
    const leitud = this.autoService.autod[Number(index)];
    if(leitud) {
      this.auto = leitud;
    }
  }
}
