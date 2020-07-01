import { Component, OnInit } from '@angular/core';
import { TopNavService } from 'src/app/navigation/top-nav/top-nav.service';

@Component({
  selector: 'app-ssl',
  templateUrl: './ssl.component.html',
  styleUrls: ['./ssl.component.css']
})
export class SslComponent implements OnInit {

  title: string = 'Route 53 / SSL certificate'

  constructor(
    private topnavService: TopNavService
  ) { }

  ngOnInit() {
    this.topnavService.emitTitle(this.title);
  }
}
