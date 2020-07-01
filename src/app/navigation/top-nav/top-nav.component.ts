import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TopNavService } from './top-nav.service';
import { Title } from 'src/app/models/title.model';
import { Subtitle } from 'src/app/models/subtitle.model';
import { Chapter } from 'src/app/models/chapter.model';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  @Output() sideNavToggle = new EventEmitter<void>();

  title: string = 'jacko';

  navItems = [
    new Title('Angular', [
      new Subtitle('change-port',[
      ]),
      new Subtitle('dependencies', [
        new Chapter('bootstrap')
      ])
    ]),
    new Title('AWS', [
      new Subtitle('route-53',[
        new Chapter('ssl-certificate')
      ]),
      new Subtitle('s3', [
        new Chapter('deploy-to-s3')
      ]),
      new Subtitle('dynamodb', [
        new Chapter('post'),
        new Chapter('get')
      ])
    ]),
    new Title('bootstrap', [
      new Subtitle('angular', [
        new Chapter('add-to-angular')
      ]) 
    ]),
    new Title('GIT', [
      new Subtitle('git',[
      ])
    ]),
    new Title('Tests', [
      new Subtitle('test-01',[
      ])
    ]),
  ]



  constructor(
    private topnavService: TopNavService
  ) { }

  ngOnInit() {
    this.topnavService.subjectNameChanged.subscribe((title: string) => {
      console.log(title);
      this.title = title;
    })
  }
  onToggleSideNav() {
    this.sideNavToggle.emit();
    console.log('emitted');
  }
  onStartHosting() {}
}
