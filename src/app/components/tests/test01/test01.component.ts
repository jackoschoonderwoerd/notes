import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/chapter.model';
import { Subtitle } from 'src/app/models/subtitle.model';
import { Title } from 'src/app/models/title.model';
import { TopNavService } from 'src/app/navigation/top-nav/top-nav.service';


@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css']
})
export class Test01Component implements OnInit {

  title: string = 'test 01'

  navItems = [
    new Title('angular', [
      new Subtitle('change-port',[
      ]),
      new Subtitle('dependencies', [
        new Chapter('bootstrap')
      ])
    ]),
    new Title('aws', [
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
    new Title('git', [
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
    this.topnavService.emitTitle(this.title);
  }

}
