import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hinnad',
  imports: [RouterLink],
  templateUrl: './hinnad.component.html',
  styleUrl: './hinnad.component.css'
})
export class HinnadComponent {
  hinnad = [1,4,3,887,5,44,7,21,9,19,12,123,55,21,17]
  hinnadCopy = this.hinnad;

  sorteeriKasvavalt() {
    this.hinnad = this.hinnad.sort((a,b) => a - b);
  }

  sorteeriKahanevalt() {
    this.hinnad = this.hinnad.sort((a,b) => b - a);
  }

  filtreeriSuuremadKui500() {
    this.hinnad = this.hinnad.filter(hind => hind > 500)
  }

  filtreeriVaiksemadKui10() {
    this.hinnad = this.hinnad.filter(hind => hind < 10)
  }
}
