import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OstukorvService {
  ostuKorv$ = new BehaviorSubject(null);
  ostukorv: { nimi: string; hind: number; aktiivne: boolean; pilt: string; }[] = [];

  constructor() { }
}
