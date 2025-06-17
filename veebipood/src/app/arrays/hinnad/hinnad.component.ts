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

  hinnad: { number: number; sonana: string; }[] = [];
  hinnadCopy = [{ number: 0, sonana: "" }];
  
  ngOnInit(): void {
    this.hinnad = this.hindService.hinnad.slice();
    this.hinnadCopy = this.hinnad
  }

  sorteeriKasvavalt() {
    this.hinnad = this.hindService.hinnad.sort((a,b) => a.number - b.number);
  }

  sorteeriKahanevalt() {
    this.hinnad = this.hindService.hinnad.sort((a,b) => b.number - a.number);
  }

  filtreeriSuuremadKui500() {
    this.hinnad = this.hindService.hinnad.filter(hind => hind.number > 500)
  }

  filtreeriVaiksemadKui10() {
    this.hinnad = this.hindService.hinnad.filter(hind => hind.number < 10)
  }
}
