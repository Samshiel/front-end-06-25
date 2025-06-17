import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OstukorvService {
  ostukorv: { nimi: string; hind: number; aktiivne: boolean; pilt: string; }[] = [];

  constructor() { }
}
