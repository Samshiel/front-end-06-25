import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HindService {
  hinnad =  [
  { number: 12, sonana: "kaksteist" },
  { number: 51, sonana: "viiskümmend üks" },
  { number: 155, sonana: "sada viiskümmend viis" },
  { number: 634, sonana: "kuussada kolmkümmend neli" },
  { number: 123, sonana: "sada kakskümmend kolm" },
  { number: 15, sonana: "viisteist" },
  { number: 12, sonana: "kaksteist" },
  { number: 6, sonana: "kuus" },
  { number: 7, sonana: "seitse" },
  { number: 5, sonana: "viis" } 
];

  constructor() { }
}
