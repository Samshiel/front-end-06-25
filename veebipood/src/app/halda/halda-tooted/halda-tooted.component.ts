import { Component, OnInit } from '@angular/core';
import { ToodeService } from '../../services/toode.service';
import { FormsModule } from '@angular/forms';
import { Toode } from '../../models/toode';

@Component({
  selector: 'app-halda-tooted',
  imports: [FormsModule],
  templateUrl: './halda-tooted.component.html',
  styleUrl: './halda-tooted.component.css'
})
export class HaldaTootedComponent implements OnInit {
    tooted: Toode[] = [];
    toode = { nimi: "", hind: 0, aktiivne: false, pilt: "" };
  
    constructor(private toodeService: ToodeService) {
    }
  
    ngOnInit(): void {
      this.tooted = this.toodeService.tooted
    }
  
    lisa() {
      if(this.toode.nimi.length === 0) {
        alert("Toote nimi ei saa olla tühi!")
        return;
      }
      this.tooted.push(this.toode);
    }
  
    kustuta(i: number) {
      this.tooted.splice(i, 1);
    }
}
