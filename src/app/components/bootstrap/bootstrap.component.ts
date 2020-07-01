import { Component, OnInit } from '@angular/core';
import { TopNavService } from 'src/app/navigation/top-nav/top-nav.service';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  title: string = 'Add bootstrap to angular'

  constructor(
    private topnavService: TopNavService
  ) { }

  ngOnInit() {
    this.topnavService.emitTitle(this.title);
  }

}
