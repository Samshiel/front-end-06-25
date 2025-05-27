import { Component } from '@angular/core';

@Component({
  selector: 'app-seaded',
  imports: [],
  templateUrl: './seaded.component.html',
  styleUrl: './seaded.component.css'
})
export class SeadedComponent {
  keel = "et";

  muudaKeel(uusKeel: string) {
    this.keel = uusKeel;
  }
}
