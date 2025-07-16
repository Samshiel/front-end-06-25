import { DatePipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avaleht',
  imports: [RouterLink, DatePipe, PercentPipe],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent {
  laigitud = false;
  kogus = 0;
  tegevus = "Muuda kogust!";
  kuupaev = new Date();
  protsent = 0.25;

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
