import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsindusService {
  tallinnaEsindused = ["Ülemiste", "Kristiine", "Rocca al Mare", "Vesse", "Järveotsa", "Magistrali"];

  constructor() { }
}
