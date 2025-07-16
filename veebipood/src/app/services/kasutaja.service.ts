import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Kasutaja } from '../models/kasutaja';

@Injectable({
  providedIn: 'root'
})
export class KasutajaService {
  //sisseLogitud = new Subject();
    kasutajad = [
    { 
      "nimi": "123",
      "email": "123@hotmail.com",
      "parool": "123"
    },
    {
      "nimi": "456",
      "email": "456@hotmail.com",
      "parool": "456"
    },
    {
      "nimi": "789",
      "email": "789@hotmail.com",
      "parool": "789"
    },
    {
      "nimi": "000",
      "email": "000@hotmail.com",
      "parool": "000"
    },
  ];
  sisseLogitud = new BehaviorSubject(sessionStorage.getItem("token") !== null);
  sisselogitudKasutaja: Kasutaja | undefined = this.otsiKasutaja()
  constructor() { }

  otsiKasutaja() {
    return this.kasutajad.find(kasutaja => kasutaja.email === sessionStorage.getItem("token"));
  }
}
