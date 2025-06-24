import { Component } from '@angular/core';
import { EsindusService } from '../../services/esindus.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-halda-esindused',
  imports: [FormsModule],
  templateUrl: './halda-esindused.component.html',
  styleUrl: './halda-esindused.component.css'
})
export class HaldaEsindusedComponent {
    constructor(private esindusService: EsindusService) {
    }

    tallinnaEsindused: { keskus: string; telefon: string; aadress: string; }[] = [];
    esindus = { keskus: "", telefon: "", aadress: "" };
  
    ngOnInit(): void {
      this.tallinnaEsindused = this.esindusService.tallinnaEsindused;
    }
  
    lisa() {
      if(this.esindus.keskus.length === 0) {
        alert("Esinduse nimi ei saa olla tühi!")
        return;
      }
      this.tallinnaEsindused.push(this.esindus);
    }
  
    kustuta(i: number) {
      this.tallinnaEsindused.splice(i, 1);
    }
}
