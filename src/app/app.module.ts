
import { FooterComponent } from './footer/footer.component';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './router.module';
import { MaterialModule } from './material.module';

import { FormsModule } from '@angular/forms';

import { TopNavComponent } from './navigation/top-nav/top-nav.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';

import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { GitComponent } from './components/git/git.component';
import { UnmarshallComponent } from './components/aws/dynamodb/unmarshall/unmarshall.component';
import { ChangePortComponent } from './components/angular/change-port/change-port.component';
import { DeployToS3Component } from './components/aws/s3/deploy-to-s3/deploy-to-s3.component';
import { SslComponent } from './components/aws/route 53/ssl/ssl.component';
import { Test01Component } from './components/tests/test01/test01.component';
import { ErrorHandlerComponent } from './components/angular/error-handler/error-handler.component';
import { HttpErrorHandlerComponent } from './components/angular/http-error-handler/http-error-handler.component';
import { VsCodeComponent } from './components/git/vs-code/vs-code.component';
import { StartEndLogstreamComponent } from './components/aws/cloudWatch/start-end-logstream/start-end-logstream.component';
import { NewProjectSetupComponent } from './components/angular/new-project-setup/new-project-setup.component';





@NgModule({
  declarations: [
    AppComponent,
    
    
    FooterComponent,
    TopNavComponent,
    SideNavComponent,

    BootstrapComponent,
    DeployToS3Component,
    GitComponent,
    SslComponent,
    UnmarshallComponent,
    ChangePortComponent,
    Test01Component,
    ErrorHandlerComponent,
    HttpErrorHandlerComponent,
    VsCodeComponent,
    StartEndLogstreamComponent,
    NewProjectSetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MaterialModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
