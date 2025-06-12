import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToodeService {
  tooted = ["Coca", "Fanta", "Sprite", "Vichy", "Red Bull", "Aura", "Monster Energy", "Arizona", "Belif", "San Pellegrino"];
  
  constructor() { }
}
