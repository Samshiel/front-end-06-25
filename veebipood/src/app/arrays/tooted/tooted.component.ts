import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FiltridJaSort } from '../filtridjasort';
import { ToodeService } from '../../services/toode.service';
import { OstukorvService } from '../../services/ostukorv.service';
import { FormsModule } from '@angular/forms';
import { Toode } from '../../models/toode';

@Component({
  selector: 'app-tooted',
  imports: [RouterLink, FormsModule],
  templateUrl: './tooted.component.html',
  styleUrl: './tooted.component.css'
})
export class TootedComponent {
  fjaS = new FiltridJaSort();
  tooted: Toode[] = [];
  toodeteNimed: string[] = [];
  otsitavaTooteNimi = "";
  tootedCopy = this.tooted;

  constructor(
    private toodeService: ToodeService,
    private ostukorService: OstukorvService
  ) {}
    
  ngOnInit() {
    this.tooted = this.toodeService.tooted.slice();
    this.toodeteNimed = this.tooted.map(toode => toode.nimi);
  }

  lisaOstuKorvi(toode: Toode) {
    this.ostukorService.ostukorv.push(toode);
  }

  otsi() {
    this.tooted = this.toodeService.tooted.filter(toode => toode.nimi.toLocaleLowerCase().includes(this.otsitavaTooteNimi.toLocaleLowerCase()))
  }
}
