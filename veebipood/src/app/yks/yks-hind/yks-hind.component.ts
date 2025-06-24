import { Component, OnInit } from '@angular/core';
import { HindService } from '../../services/hind.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yks-hind',
  imports: [],
  templateUrl: './yks-hind.component.html',
  styleUrl: './yks-hind.component.css'
})
export class YksHindComponent implements OnInit {
  hind !: { number: number; sonana: string; };

  constructor(
    private hindService: HindService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get("index");
    const leitud = this.hindService.hinnad[Number(index)]
    if(leitud) {
      this.hind = leitud;
    }
  }
}
