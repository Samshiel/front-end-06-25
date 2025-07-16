import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { KasutajaService } from '../services/kasutaja.service';
import { Kasutaja } from '../models/kasutaja';
import { Toode } from '../models/toode';
import { OstukorvService } from '../services/ostukorv.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    sisseLogitud = false
    kasutaja !: Kasutaja | undefined;
    ostuKorviSumma = 0;

    constructor(
      public translate: TranslateService,
      private kasutajaService: KasutajaService,
      private ostuKorvService: OstukorvService
    ) {
    }

    ngOnInit(): void {
      //kaitivtub ainult refresiga
      this.leiaKasutaja()
      this.arvutaKogusumma();
    }

    kasutaKeelt(keel: string) {
      this.translate.use(keel);
      localStorage.setItem("keel", keel);
    }

    logOut() {
      //next muudab vaartust ja käivitab korraga kõik subscribe kohad
      this.kasutajaService.sisseLogitud.next(false);
      sessionStorage.removeItem("token");
    }

    private leiaKasutaja() {
      this.kasutajaService.sisseLogitud.subscribe(vastus => {
        if(vastus) {
          this.kasutaja = this.kasutajaService.otsiKasutaja();
        }
        this.sisseLogitud = vastus;
      });
    }

    private arvutaKogusumma() {
      this.ostuKorvService.ostuKorv$.subscribe(() => {
        let summa = 0;
        const tooted: Toode[] = JSON.parse(localStorage.getItem("ostukorv")|| "[]");
        tooted.forEach(toode => summa = summa + toode.hind);
        this.ostuKorviSumma = summa;
      });
    }
}
