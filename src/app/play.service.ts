import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }

  
  getData(){
    return ['laravel','spring','flask','express','symphony'];

  }
  
}
