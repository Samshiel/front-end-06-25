import { Injectable } from '@angular/core';

// Service ainuke mõte ongi olla constructori sulgude sees
// Kui service pole üheski constructiori terves projetis, on
// tegemist kasutamata service-ga 

@Injectable({
  providedIn: 'root'
})
export class AutoService {
      autod = [
    "Toyota",
    "BMW",
    "Ford",
    "Mercedes-Benz",
    "Chevrolet",
    "Honda",
    "Audi",
    "Kia",
    "Hyundai",
    "Nissan",
    "Volkswagen",
    "Mazda",
    "Subaru",
    "Jeep",
    "Tesla"
  ]

  constructor() { }
}
