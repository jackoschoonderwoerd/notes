import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {


  examples = {
    component: `
    COMPONENT

    throwError1() {
      var a = b;
    }
    
    throwError2() {
      try {
        var a = b;
      } catch (error) {
        throw error;
      }
    } 
    `,
    service: `
    export class GlobalErrorHandlerService implements ErrorHandler {
 
      constructor() { 
      }
      handleError(error) {
         console.error('An error occurred:', error.message);
      }
    }
    `,
    appModule: `
    @NgModule({
      ------
      providers: [
        { provide: ErrorHandler,
          useClass: GlobalErrorHandlerService 
        }
      ]
    })
    export class AppModule { } 
    `,
    errorComponent: `
    import { Component } from '@angular/core';
 
    @Component({
      template: 
        <h2>An unknown error occurred.</h2>
      })
      export class ErrorComponent {
    } 
    `,
    globalErrorHandlerService: `
    import { ErrorHandler, Injectable, Injector} from '@angular/core';
    import { Router } from '@angular/router';
    
    @Injectable()
    export class GlobalErrorHandlerService implements ErrorHandler {
    
        constructor(private injector: Injector) {    }
    
        handleError(error) {
    
            let router = this.injector.get(Router);
            console.log('URL: ' + router.url);
            console.error(error);
          
            router.navigate(['/error']);
      }
    }
    `
  }

  constructor() { }

  getExamples() {
    return this.examples;
  }
}
