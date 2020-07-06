import { Component, OnInit } from '@angular/core';
import { TopNavService } from 'src/app/navigation/top-nav/top-nav.service';

@Component({
  selector: 'app-new-project-setup',
  templateUrl: './new-project-setup.component.html',
  styleUrls: ['./new-project-setup.component.css']
})
export class NewProjectSetupComponent implements OnInit {

  title: string = 'New Project Setup'

  constructor(private topNavService : TopNavService) { }

  ngOnInit() {
    this.topNavService.emitTitle(this.title)
  }

}
