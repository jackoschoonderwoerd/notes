import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  toggleModal = new EventEmitter<string>();




  constructor() { }

  sayhi() {
    console.log('hi');
  }
}
