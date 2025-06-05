import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laenukalkulaator',
  imports: [FormsModule],
  templateUrl: './laenukalkulaator.component.html',
  styleUrl: './laenukalkulaator.component.css'
})
export class LaenukalkulaatorComponent {
  ostuhind = 75000;
  sissemakse = 0;
  protsent = (this.sissemakse / this.ostuhind * 100).toFixed(2);
  laenusumma = this.ostuhind - this.sissemakse;
  periood = 30;
  marginaal = 1.7;
  euribor = 2.15;
  intress = (this.marginaal + this.euribor).toFixed(2);

  arvutaProtsent() {
    this.protsent = (this.sissemakse / this.ostuhind * 100).toFixed(2);
    this.laenusumma = this.ostuhind - this.sissemakse;
  }

  arvutaIntress() {
    this.intress = (this.marginaal + this.euribor).toFixed(2);
  }

  arvutaKuumakse() {
    return (
      (this.ostuhind - this.sissemakse) /
      this.periood / 12 * 
      (this.marginaal + this.euribor) / 2.7)
      .toFixed(2);
  }

  arvutaKorgendatudKuumakse() {
    return (
      (this.ostuhind - this.sissemakse) /
      this.periood /12 * 7/ 2.7).toFixed(2);
  }
} 
