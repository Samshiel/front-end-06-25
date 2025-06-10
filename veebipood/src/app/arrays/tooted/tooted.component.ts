import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FiltridJaSort } from '../filtridjasort';

@Component({
  selector: 'app-tooted',
  imports: [RouterLink],
  templateUrl: './tooted.component.html',
  styleUrl: './tooted.component.css'
})
export class TootedComponent {
  fjaS = new FiltridJaSort();
  tooted = ["Coca", "Fanta", "Sprite", "Vichy", "Red Bull", "Aura", "Monster Energy", "Arizona", "Belif", "San Pellegrino"];
  tootedCopy = this.tooted;
}
