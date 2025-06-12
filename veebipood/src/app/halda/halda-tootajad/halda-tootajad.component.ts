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
  tootajad: string[] = [];
  tootaja = "";

  constructor(private tootajaService: TootajaService) {
  }

  ngOnInit(): void {
    this.tootajad = this.tootajaService.tootajad
  }

  lisa() {
    if(this.tootaja.length === 0) {
      alert("Töötaja nimi ei saa olla tühi!")
      return;
    }
    this.tootajad.push(this.tootaja);
  }

  kustuta(i: number) {
    this.tootajad.splice(i, 1);
  }
}
