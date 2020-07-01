import { Component, OnInit } from '@angular/core';
import { TopNavService } from 'src/app/navigation/top-nav/top-nav.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  title: string = 'jerga'

  constructor(
    private topnavService: TopNavService
  ) { }

  ngOnInit() {
    this.topnavService.emitTitle(this.title);
  }

}
