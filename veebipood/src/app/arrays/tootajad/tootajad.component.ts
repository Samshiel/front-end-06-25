import { Component } from '@angular/core';
import { FiltridJaSort } from '../filtridjasort';
import { RouterLink } from '@angular/router';
import { TootajaService } from '../../services/tootaja.service';

@Component({
  selector: 'app-tootajad',
  imports: [RouterLink],
  templateUrl: './tootajad.component.html',
  styleUrl: './tootajad.component.css'
})
export class TootajadComponent {
  fjaS = new FiltridJaSort();
  tootajad: string[] = [];

  constructor(private tootajadService: TootajaService) {}
  
  ngOnInit() {
    this.tootajad = this.tootajadService.tootajad.slice();
  }
  tootajadCopy = this.tootajad;
}
