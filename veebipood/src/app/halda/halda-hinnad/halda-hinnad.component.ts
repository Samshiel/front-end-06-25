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

  hinnad: number[] = []
  hind = 0;

  ngOnInit(): void {
    this.hinnad = this.hindService.hinnad;
  }

  lisa() {
    if(this.hind <= 0) {
      alert("Peab olema positiivne number!")
      return;
    }
    this.hinnad.push(this.hind);
  }

  kustuta(i: number) {
    this.hinnad.splice(i, 1);
  }
}
