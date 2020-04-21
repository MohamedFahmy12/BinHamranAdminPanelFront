import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryBalancedService {

  constructor() { }

  EntryBalanced(debitArr:any[],creditArr:any[]){
    debugger
    // initial
    var debit=0;
    var credit=0;
    var debitStocks=0;
    var creditStocks=0;

    // total of credit stocks and money
    for (let i = 0; i < creditArr.length; i++) {
      if(creditArr[i].Credit){
        credit +=parseFloat( creditArr[i].Credit);

      }

      if(creditArr[i].StocksCredit){
        creditStocks +=parseFloat( creditArr[i].StocksCredit);

      }
      
    }

    // total of debit stocks and money
    for (let i = 0; i < debitArr.length; i++) {
      if(debitArr[i].Debit){
        debit +=parseFloat( debitArr[i].Debit);

      }

      if(debitArr[i].StocksDebit){
        debitStocks += parseFloat(debitArr[i].StocksDebit);

      }
      
    }

    // check balanced
    if(debit == credit && debitStocks== creditStocks){
      return true;
    }
    else{
      return false;
    }

  }
}
