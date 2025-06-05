import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maksimaalnekalkulaator',
  imports: [FormsModule],
  templateUrl: './maksimaalnekalkulaator.component.html',
  styleUrl: './maksimaalnekalkulaator.component.css'
})
export class MaksimaalnekalkulaatorComponent {
  ylalpeetavad = 1;
  netosissetulek = 900;
  kohustused = 0;
  limiit = ((this.netosissetulek - this.kohustused) * 68 / (this.ylalpeetavad / 60 + 0.1 )).toFixed(2);
  //limiit = 55790.16;
  
  uuendaLimiiti() {
    this.limiit = ((this.netosissetulek - this.kohustused) * 68 / (this.ylalpeetavad / 60 + 0.1 )).toFixed(2);
  }
}
