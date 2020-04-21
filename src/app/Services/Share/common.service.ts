import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
readonly rooturl='http://localhost:63103/api';
//readonly rooturl='http://www.stockapi.gmtcc.co/api';



  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    debugger;
    this.messageSource.next(message)
  }

}
