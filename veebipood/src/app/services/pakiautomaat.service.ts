import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PakiautomaatService {

  constructor(
    private http: HttpClient
  ) { }

  saaPakiAutomaadid(){
    return this.http.get<any>("https://www.omniva.ee/locations.json");
  }
}
