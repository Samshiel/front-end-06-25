import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TootajaService {
    tootajad = [
    { eesnimi: "Mark", pereNimi: "Tamm", vanus: 28, aktiivne: false, ametikoht: "Arendaja" },
    { eesnimi: "Oliver", pereNimi: "Kask", vanus: 32, aktiivne: false, ametikoht: "Disainer" },
    { eesnimi: "Martin", pereNimi: "Saar", vanus: 35, aktiivne: false, ametikoht: "Tootejuht" },
    { eesnimi: "Kristofer Robin", pereNimi: "Lepp", vanus: 30, aktiivne: false, ametikoht: "Projektijuht" },
    { eesnimi: "Marek", pereNimi: "Kivi", vanus: 27, aktiivne: false, ametikoht: "Tester" },
    { eesnimi: "Sander", pereNimi: "Rebane", vanus: 31, aktiivne: false, ametikoht: "Arhitekt" },
    { eesnimi: "Hanna Lisete", pereNimi: "Pärn", vanus: 26, aktiivne: false, ametikoht: "Turundaja" },
    { eesnimi: "Eva Sofia", pereNimi: "Mets", vanus: 29, aktiivne: false, ametikoht: "Personalijuht" },
    { eesnimi: "Marta", pereNimi: "Oja", vanus: 33, aktiivne: false, ametikoht: "Sekretär" },
    { eesnimi: "Emma Maria", pereNimi: "Teder", vanus: 25, aktiivne: false, ametikoht: "Finantsanalüütik" },
    { eesnimi: "Laura", pereNimi: "Vaher", vanus: 28, aktiivne: false, ametikoht: "Juhiabi" },
  ];
  constructor() { }
}
