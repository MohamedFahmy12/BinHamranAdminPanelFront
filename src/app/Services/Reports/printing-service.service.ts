import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../Share/common.service';

@Injectable({
  providedIn: 'root'
})
export class PrintingServiceService {

  constructor(private http:HttpClient,private common:CommonService) { }

  printCreditnote(NoticeID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printCreditnote/',{'NoticeID':NoticeID});

  }

  printDebitnote(NoticeID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printDebitnote/',{'NoticeID':NoticeID});

  }
  printRiyalReciept(RecieptID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printRiyalReciept/',{'RecieptID':RecieptID});

  }

  printCheckReciept(RecieptID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printCheckReciept/',{'RecieptID':RecieptID});

  }

  printRiyalExchange(RecieptID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printRiyalExchange/',{'RecieptID':RecieptID});

  }

  printCheckExchange(RecieptID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printCheckExchange/',{'RecieptID':RecieptID});

  }

  printCountry(CountryID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printCountry/',{'CountryID':CountryID});

  }
  printPartner(PartnerID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printPartner/',{'PartnerID':PartnerID});

  }
  PrintPortfolio(PortfolioID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/PrintPortfolio/',{'PortfolioID':PortfolioID});

  }
  PrintEmployee(EmployeeID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/PrintEmployee/',{'EmployeeID':EmployeeID});

  }
  PrintAccount(AccountID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/PrintAccount/',{'AccountID':AccountID});

  }

  PrintPurchaseOrder(PurchaseOrderID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printPurchaseOrder/',{'PurchaseOrderID':PurchaseOrderID});

  }
  PrintSellingOrder(SellingOrderID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printSellingOrder/',{'SellingOrderID':SellingOrderID});

  }

  PrintSellingInvoice(SellingInvoiceID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printSellingInvoice/',{'SellingInvoiceID':SellingInvoiceID});

  }

  PrintPurchaseInvoice(PurchaseInvoiceID :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/printPurchaseInvoice/',{'PurchaseInvoiceID':PurchaseInvoiceID});

  }
}
