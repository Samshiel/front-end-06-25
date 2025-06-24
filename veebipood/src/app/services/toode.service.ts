import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToodeService {
  tooted = [
  { nimi: "Coca", hind: 1.5, aktiivne: false, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
  { nimi: "Fanta", hind: 1.4, aktiivne: false, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
  { nimi: "Sprite", hind: 1.4, aktiivne: false, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
  { nimi: "Vichy", hind: 1.2, aktiivne: false, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
  { nimi: "Red Bull", hind: 2.0, aktiivne: false, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
  { nimi: "Aura", hind: 1.3, aktiivne: false, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
  { nimi: "Monster Energy", hind: 2.2, aktiivne: false, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
  { nimi: "Arizona", hind: 2.5, aktiivne: false, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
  { nimi: "Belif", hind: 1.8, aktiivne: true, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
  { nimi: "San Pellegrino", hind: 2.3, aktiivne: true, pilt: "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg" },
];
  
  constructor() { }
}
