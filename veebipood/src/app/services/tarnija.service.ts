import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/protuct';

@Injectable({
  providedIn: 'root'
})
export class TarnijaService {
  products: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  teeApiParing(link: string){
    return this.http.get<any>(link);
  }
}
