import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopNavService {

  subjectNameChanged = new EventEmitter<string>();

  constructor() { }

  emitTitle(title) {
    console.log(title);
    this.subjectNameChanged.emit(title);
  }
}
