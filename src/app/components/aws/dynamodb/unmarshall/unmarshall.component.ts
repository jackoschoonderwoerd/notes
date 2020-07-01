import { Component, OnInit } from '@angular/core';
import { TopNavService } from 'src/app/navigation/top-nav/top-nav.service';

@Component({
  selector: 'app-unmarshall',
  templateUrl: './unmarshall.component.html',
  styleUrls: ['./unmarshall.component.css']
})
export class UnmarshallComponent implements OnInit {

  title: string ="aws / unmarshall";
  
  constructor(
    private topnavService: TopNavService
  ) { }


  ngOnInit() {
    this.topnavService.subjectNameChanged.emit(this.title);
  }

}
