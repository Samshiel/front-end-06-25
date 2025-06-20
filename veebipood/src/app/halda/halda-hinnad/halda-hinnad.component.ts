import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HindService } from '../../services/hind.service';

@Component({
  selector: 'app-halda-hinnad',
  imports: [FormsModule],
  templateUrl: './halda-hinnad.component.html',
  styleUrl: './halda-hinnad.component.css'
})
export class HaldaHinnadComponent implements OnInit {
  constructor(private hindService: HindService) {
  }

  hinnad: { number: number; sonana: string; }[] = []
  hind = { number: 0, sonana: "" };

  ngOnInit(): void {
    this.hinnad = this.hindService.hinnad;
  }

  lisa() {
    if(this.hind.number <= 0) {
      alert("Peab olema positiivne number!")
      return;
    }
    this.hinnad.push(this.hind);
    this.hind = { number: 0, sonana: "" };
  }

  kustuta(i: number) {
    this.hinnad.splice(i, 1);
  }
}
