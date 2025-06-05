import { Component } from '@angular/core';
import { TavakalkulaatorComponent } from "./tavakalkulaator/tavakalkulaator.component";
import { LaenukalkulaatorComponent } from './laenukalkulaator/laenukalkulaator.component';
import { MaksimaalnekalkulaatorComponent } from './maksimaalnekalkulaator/maksimaalnekalkulaator.component';

@Component({
  selector: 'app-kalkulaator',
  imports: [TavakalkulaatorComponent, LaenukalkulaatorComponent, MaksimaalnekalkulaatorComponent],
  templateUrl: './kalkulaator.component.html',
  styleUrl: './kalkulaator.component.css'
})
export class KalkulaatorComponent {
  vaade = "laenu";

  muudaVaade(vaade: string) {
    this.vaade = vaade;
  }
}
