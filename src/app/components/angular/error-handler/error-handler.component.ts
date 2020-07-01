import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { TopNavService } from 'src/app/navigation/top-nav/top-nav.service';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {

  examples;

  title: string = "Angular / Error Handler"

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private topNavService: TopNavService
  ) { }

  ngOnInit() {
    this.topNavService.emitTitle(this.title);
    this.examples = this.errorHandlerService.getExamples();
  }

}
