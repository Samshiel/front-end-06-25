import { Component } from '@angular/core';
import { HindService } from '../../services/hind.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-muuda-hind',
  imports: [FormsModule],
  templateUrl: './muuda-hind.component.html',
  styleUrl: './muuda-hind.component.css'
})
export class MuudaHindComponent {
    hind !: {number: number; sonana:string};
    index !: number;

  constructor(
    private hindService: HindService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.index = Number(this.route.snapshot.paramMap.get("index"));
    const leitud = this.hindService.hinnad[this.index];
    if(leitud) {
      this.hind = leitud;
    }
  }

    muuda() {
    this.hindService.hinnad[this.index] = this.hind;
    this.router.navigateByUrl("/halda-hinnad");
  }
}
