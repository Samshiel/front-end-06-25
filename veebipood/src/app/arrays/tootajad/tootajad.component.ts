import { Component } from '@angular/core';
import { FiltridJaSort } from '../filtridjasort';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tootajad',
  imports: [RouterLink],
  templateUrl: './tootajad.component.html',
  styleUrl: './tootajad.component.css'
})
export class TootajadComponent {
  fjaS = new FiltridJaSort();
  tootajad = [
    "Mark",
    "Oliver",
    "Martin",
    "Kristofer Robin",
    "Marek",
    "Sander",
    "Hanna Lisete",
    "Eva Sofia",
    "Marta",
    "Emma Maria",
    "Laura"
  ];
  tootajadCopy = this.tootajad;
}
