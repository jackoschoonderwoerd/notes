import { Component, OnInit } from '@angular/core';
import { StartEndLogstreamService } from '../start-end-logstream.service';
import { TopNavService } from 'src/app/navigation/top-nav/top-nav.service';

@Component({
  selector: 'app-start-end-logstream',
  templateUrl: './start-end-logstream.component.html',
  styleUrls: ['./start-end-logstream.component.css']
})
export class StartEndLogstreamComponent implements OnInit {

  title: string = 'Start - End Logstream'
  examples: object;

  constructor(
    private startEndLogstream: StartEndLogstreamService,
    private topNavService: TopNavService
  ) { }

  ngOnInit() {
    this.topNavService.emitTitle(this.title);
    this.examples = this.startEndLogstream.getExamples();
    console.log(this.examples);
  }

}
