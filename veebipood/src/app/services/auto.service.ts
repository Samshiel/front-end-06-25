import { Injectable } from '@angular/core';

// Service ainuke mõte ongi olla constructori sulgude sees
// Kui service pole üheski constructiori terves projetis, on
// tegemist kasutamata service-ga 

@Injectable({
  providedIn: 'root'
})
export class AutoService {
      autod = [
    {
      "nimi": "Toyota",
      "hind": 20000,
      "aktiivne": true,
      "pilt": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWg6r7tj2XTAI7TQwaY0dkTG9yTbqBr_ccg&s"
    },
    {
      "nimi": "BMW",
      "hind": 25000,
      "aktiivne": false,
      "pilt": "https://www.shutterstock.com/image-illustration/almaty-kazakhstan-february-10-2019-600nw-1314657857.jpg"
    },
    {
      "nimi": "Ford",
      "hind": 21000,
      "aktiivne": false,
      "pilt": "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg"
    },
    {
      "nimi": "Mercedes-Benz",
      "hind": 40000,
      "aktiivne": false,
      "pilt": "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/649000/300/649382.jpg"
    },
    {
      "nimi": "Chevrolet",
      "hind": 35000,
      "aktiivne": false,
      "pilt": "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg"
    },
    {
      "nimi": "Honda",
      "hind": 18000,
      "aktiivne": false,
      "pilt": "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg"
    },
    {
      "nimi": "Nissan",
      "hind": 80000,
      "aktiivne": false,
      "pilt": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDubrKssqh8ZnNVu4nVMzFbdgfSPt-QL9mEw&s"
    },
    {
      "nimi": "Subaru",
      "hind": 40000,
      "aktiivne": false,
      "pilt": "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg"
    },
    {
      "nimi": "Volkswagen",
      "hind": 32000,
      "aktiivne": false,
      "pilt": "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg"
    },
    {
      "nimi": "Mazda",
      "hind": 5000,
      "aktiivne": false,
      "pilt": "https://t4.ftcdn.net/jpg/13/43/30/79/360_F_1343307916_lvvBYoiywilnWpaaAqM67Jz2tPQxNvvm.jpg"
    }
  ]

  constructor() { }
}
