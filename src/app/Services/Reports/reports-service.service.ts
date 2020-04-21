import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommonService } from '../Share/common.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsServiceService {

  constructor(private http:HttpClient,private common:CommonService) { }



  GetPortfolios(){
   return this.http.get(this.common.rooturl+'/Portfolio/GetAll');

 }
 GetDbNames(){
   debugger;
   return this.http.get(this.common.rooturl+'/ReportData/GetDbNames');
 }
 GetCompanyBranches(dbIds:any){
   return this.http.get(this.common.rooturl+'/ReportData/GetCompanyBranches?dbIds='+dbIds );
 }
 GetEntries(dbIds:any){
  return this.http.get(this.common.rooturl+'/ReportData/GetEntries?dbIds='+dbIds);
 }
  
 GetAccounts(dbIds:any){
  return this.http.get(this.common.rooturl+'/ReportData/GetAccounts?dbIds='+dbIds);
 }
  ViewResultOfPortofolioWork(todate : string,portofolioid :number){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/ResultOfPortofolio/',{'todate':todate,'portofolioid':portofolioid});

  }

   savereport(report:any){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/savereport',report);

   }
  ViewCashMovementReyalPortofolio(fromdate:string, todate : string,untilldate:string,portofolioid :number){
    debugger;
  
   return this.http.post(this.common.rooturl+'/ReportViewer/CashMovementReyalPortofolio/',{'todate':todate,'fromdate':fromdate,'untilldate':untilldate,'portofolioid':portofolioid});

  }
  ViewSellPurchasePartner(portfolioId:number,partnerId:number,startDate:string,endDate:string){

    debugger;
    return this.http.post(this.common.rooturl+'/ReportViewer/SellPurchase/',{'portfolioId':portfolioId,'partnerId':partnerId,
    'startDate':startDate,'endDate':endDate});

  }
  PreviewReport(portfolioId:any,todate : any){
    
    debugger;
    return this.http.post(this.common.rooturl+'/ReportViewer/portfolioEvaluateport/',{'todate':todate,'portID':portfolioId} );

  }
  GetAllports(){

    return this.http.get(this.common.rooturl+'/Notice/GetPortfolios');
  }

  CompaniesSharesInPortfolio(portfolioID : number,fromDate: string,toDate :string){
    debugger;

   return this.http.post(this.common.rooturl+'/ReportViewer/CompaniesSharesInPortfolio',
    {'portfolioID':portfolioID,'fromDate':fromDate
  ,'toDate':toDate});


  }

  Earningsreport(portfolioId:any,todate : any,firstdate:any,enddate:any){

    debugger;
    return this.http.post(this.common.rooturl+'/ReportViewer/Earningsreport/',{'portID':portfolioId,'todate':todate,'firstdate':firstdate,'enddate':enddate} );
  }
  ProfitsOnSameYear(portfolioId,startDate,endDate){
    debugger;
    return this.http.get(this.common.rooturl+'/ReportViewer/ProfitsYear?portfolioID='+portfolioId+'&fromDate='+startDate+'&toDate='+endDate);
  }
  ProfitsDistributor(portID:any,startdate:any,enddate:any){

    debugger;
    return this.http.post(this.common.rooturl+'/ReportViewer/ProfitsDistributor',{'portID':portID,'startdate':startdate,'enddate':enddate});

  }

  Earningscollected(portID:any,Year:any){

    debugger;
    return this.http.post(this.common.rooturl+'/ReportViewer/Earningscollected',{'portID':portID,'year':Year});

  }
  GetAllparteners(id:any){
    return this.http.get(this.common.rooturl+'/Portfolio/GetAllportparteners/'+id);
  }


}
