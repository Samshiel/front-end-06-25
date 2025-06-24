import { Component } from '@angular/core';
import { TootajaService } from '../../services/tootaja.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-halda-tootajad',
  imports: [FormsModule],
  templateUrl: './halda-tootajad.component.html',
  styleUrl: './halda-tootajad.component.css'
})
export class HaldaTootajadComponent {
  tootajad: { eesnimi: string; pereNimi: string; vanus: number; aktiivne: boolean; ametikoht: string; }[] = [];
  tootaja = { eesnimi: "", pereNimi: "", vanus: 0, aktiivne: false, ametikoht: "" };

  constructor(private tootajaService: TootajaService) {
  }

  ngOnInit(): void {
    this.tootajad = this.tootajaService.tootajad
  }

  lisa() {
    if(this.tootaja.eesnimi.length === 0) {
      alert("Töötaja nimi ei saa olla tühi!")
      return;
    }
    this.tootajad.push(this.tootaja);
  }

  kustuta(i: number) {
    this.tootajad.splice(i, 1);
  }
}
