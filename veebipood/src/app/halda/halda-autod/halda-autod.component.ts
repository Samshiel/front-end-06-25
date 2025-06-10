import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoService } from '../../services/auto.service';

@Component({
  selector: 'app-halda-autod',
  imports: [FormsModule],
  templateUrl: './halda-autod.component.html',
  styleUrl: './halda-autod.component.css'
})
export class HaldaAutodComponent implements OnInit {  
  autod: string[] = [];
  auto = "";

  constructor(private autoService: AutoService) {
    //Failiühenduse jaoks
  }

  ngOnInit(): void {
    this.autod = this.autoService.autod
  }

  lisa() {
    if(this.auto.length === 0) {
      alert("Auto nimi ei saa olla tühi!")
      return;
    }
    this.autod.push(this.auto);
  }

  kustuta(i: number) {
    this.autod.splice(i, 1);
  }
}
