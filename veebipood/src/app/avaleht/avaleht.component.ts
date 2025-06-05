import { Component } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  imports: [],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent {
  laigitud = false;
  kogus = 0;
  tegevus = "Muuda kogust!";

  nulli() {
    this.kogus = 0;
    this.tegevus = "Nullisin koguse!"
  }

  suurenda() {
    this.kogus += 1;
    this.tegevus = "Suurendasin kogust!"
  }

  vahenda() {
    this.kogus -= 1;
    this.tegevus = "Vähendasin kogust!"
  }
}
