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
 getReportForDesigner(reportName:string){
  return this.http.get<string>(this.common.rooturl+'/ReportData/getReportForDesigner?reportName='+reportName);
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
  ProvisionForDepreciationOfFixedAssets(startDate: string,endDate: string, companyBranchCode: string,AccountID: string,  databaseID:string,currentLocation:string){
    return this.http.post(this.common.rooturl+'/ReportViewer/ProvisionForDepreciationOfFixedAssets/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'AccountID': AccountID,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  ConsumptionOfDepreciation(startDate: string,endDate: string, companyBranchCode: string,AccountID: string,  databaseID:string,currentLocation:string){
    return this.http.post(this.common.rooturl+'/ReportViewer/ConsumptionOfDepreciation/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'AccountID': AccountID,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  LastDurationGoods(startDate: string, companyBranchCode: string, databaseID:string,currentLocation:string){
    return this.http.post(this.common.rooturl+'/ReportViewer/LastDurationGoods/',
    {'startDate':startDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  MonthlyAnalisisForEntriesModel(startDate: string, companyBranchCode: string, entryID: string, databaseID:string,currentLocation:string ){
    return this.http.post(this.common.rooturl+'/ReportViewer/MonthlyAnalisisForEntriesModel/',{'startDate':startDate,'companyBranchCode':companyBranchCode,'entryID': entryID,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  MonthlyAnalisisForAccounts(startDate: string, companyBranchCode: string, AccountID: string, databaseID:string,currentLocation:any ){
    return this.http.post(this.common.rooturl+'/ReportViewer/MonthlyAnalisisForAccounts/',{'startDate':startDate,'companyBranchCode':companyBranchCode,'AccountID': AccountID,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  OpeningEntries(startDate: string, companyBranchCode: string, databaseID:string,currentLocation:string ){
    return this.http.post(this.common.rooturl+'/ReportViewer/OpeningEntries/',{'startDate':startDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  AccountTotalBalance(startDate: string, companyBranchCode: string, AccountID: string, databaseID:string,currentLocation:string )
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/AccountTotalBalance/',
    {'startDate':startDate,'companyBranchCode':companyBranchCode,'AccountID': AccountID,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  GeneralDaily(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string,currentLocation:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/GeneralDaily/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  Institutionfees(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string,type:string,currentLocation:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/Institutionfees/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'type':type,'currentLocation':currentLocation});
  }
  InstitutionTrialBalance(startDate: string,   databaseID:string,currentLocation:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/InstitutionTrialBalance/',
    {'startDate':startDate,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  BranchesTrialBalance(startDate: string, companyBranchCode: string, databaseID:string,currentLocation:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/BranchesTrialBalance/',
    {'startDate':startDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  
  FixedAssetsOfInstitution(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string,currentLocation:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/FixedAssetsOfInstitution/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  FixedAssetsAdditions(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string,currentLocation:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/FixedAssetsAdditions/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  TotalExclusionOfFixedAssets(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string,currentLocation:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/TotalExclusionOfFixedAssets/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'currentLocation':currentLocation});
  }
  DepreciationOfFixedAssets(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string,currentLocation:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/DepreciationOfFixedAssets/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'currentLocation':currentLocation});
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

  GetPath(){
    return this.http.get(this.common.rooturl+'/ReportViewer/GetPath');
  }

}
