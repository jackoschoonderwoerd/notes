import { Component, OnInit } from '@angular/core';
import { TopNavService } from 'src/app/navigation/top-nav/top-nav.service';

@Component({
  selector: 'app-change-port',
  templateUrl: './change-port.component.html',
  styleUrls: ['./change-port.component.css']
})
export class ChangePortComponent implements OnInit {

  title: string ="angular / change-port-4200";

  constructor(
    private topnavService: TopNavService
  ) { }

  ngOnInit() {
    console.log(this.title);
    this.topnavService.emitTitle(this.title)
  }
}
