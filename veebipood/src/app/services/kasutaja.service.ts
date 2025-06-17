import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KasutajaService {
  sisseLogitud = false;
  kasutajad = [
    {
      "email": "123@hotmail.com",
      "parool": "123"
    },
    {
      "email": "456@hotmail.com",
      "parool": "456"
    },
    {
      "email": "789@hotmail.com",
      "parool": "789"
    },
    {
      "email": "000@hotmail.com",
      "parool": "000"
    },
  ]

  constructor() { }
}
