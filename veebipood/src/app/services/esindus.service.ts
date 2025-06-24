import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsindusService {
  tallinnaEsindused = [
    { keskus: "Ülemiste", telefon: "+372 600 1001", aadress: "Suur-Sõjamäe 4, Tallinn" },
    { keskus: "Kristiine", telefon: "+372 600 1002", aadress: "Endla 45, Tallinn" },
    { keskus: "Rocca al Mare", telefon: "+372 600 1003", aadress: "Paldiski mnt 102, Tallinn" },
    { keskus: "Vesse", telefon: "+372 600 1004", aadress: "Vesse 4, Tallinn" },
    { keskus: "Järveotsa", telefon: "+372 600 1005", aadress: "Järveotsa tee 29, Tallinn" },
    { keskus: "Magistrali", telefon: "+372 600 1006", aadress: "Sõpruse pst 201/203, Tallinn" },
  ];

  constructor() { }
}
