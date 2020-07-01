import { ModalService } from './services/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-css';

  modalStatus = false;

  constructor(private modalService: ModalService) {

  }

  ngOnInit() {
    // console.log(this.modalStatus);
    // this.modalService.toggleModal
    //   .subscribe(status => {
    //     console.log(status + ' from app.components');
    //     this.modalStatus = !this.modalStatus;
    //     console.log(this.modalStatus);
    //   });
  }



}
