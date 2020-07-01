
import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { GitComponent } from './components/git/git.component';
import { DeployToS3Component } from './components/aws/s3/deploy-to-s3/deploy-to-s3.component';
import { SslComponent } from './components/aws/route 53/ssl/ssl.component';
import { UnmarshallComponent } from './components/aws/dynamodb/unmarshall/unmarshall.component';
import { ChangePortComponent } from './components/angular/change-port/change-port.component';
import { Test01Component } from './components/tests/test01/test01.component';
import { ErrorHandlerComponent } from './components/angular/error-handler/error-handler.component';


const appRoutes: Routes = [
  { path: '', component: BootstrapComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'git', component: GitComponent },
  { path: 'deploy-to-s3', component: DeployToS3Component },
  { path: 'ssl', component: SslComponent },
  { path: 'unmarshall', component: UnmarshallComponent},
  { path: 'change-port', component: ChangePortComponent },
  { path: 'test01', component: Test01Component },
  { path: 'error-handler', component: ErrorHandlerComponent },
  { path: '**', component: BootstrapComponent },
];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes),    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
