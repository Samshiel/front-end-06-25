import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HindService } from '../../services/hind.service';

@Component({
  selector: 'app-hinnad',
  imports: [RouterLink],
  templateUrl: './hinnad.component.html',
  styleUrl: './hinnad.component.css'
})
export class HinnadComponent implements OnInit {
  constructor(private hindService: HindService) {}

  hinnad: number[] = [];
  hinnadCopy = this.hinnad;
  
  ngOnInit(): void {
    this.hinnad = this.hindService.hinnad.slice();
    this.hinnadCopy = this.hinnad
  }

  sorteeriKasvavalt() {
    this.hinnad = this.hindService.hinnad.sort((a,b) => a - b);
  }

  sorteeriKahanevalt() {
    this.hinnad = this.hindService.hinnad.sort((a,b) => b - a);
  }

  filtreeriSuuremadKui500() {
    this.hinnad = this.hindService.hinnad.filter(hind => hind > 500)
  }

  filtreeriVaiksemadKui10() {
    this.hinnad = this.hindService.hinnad.filter(hind => hind < 10)
  }
}
