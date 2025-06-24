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
  tootajad: { eesnimi: string; pereNimi: string; vanus: number; aktiivne: boolean; ametikoht: string; }[] = [];
  tootajateEesnimed: string[] = []

  constructor(private tootajadService: TootajaService) {}
  
  ngOnInit() {
    this.tootajad = this.tootajadService.tootajad.slice();
    this.tootajateEesnimed = this.tootajad.map(tootaja => tootaja.eesnimi)
  }
  tootajadCopy = this.tootajad;
}
