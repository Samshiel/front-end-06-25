import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisamine',
  imports: [FormsModule],
  templateUrl: './lisamine.component.html',
  styleUrl: './lisamine.component.css'
})
export class LisamineComponent {
  laptop = "";
  lisatud = false;

  lisatudSonum() {
    alert("Arvuti liastud");
    this.lisatud = true;
  }
}
