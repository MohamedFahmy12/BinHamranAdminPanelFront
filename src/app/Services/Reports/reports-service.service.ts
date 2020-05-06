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
  ProvisionForDepreciationOfFixedAssets(startDate: string,endDate: string, companyBranchCode: string,AccountID: string,  databaseID:string){
    return this.http.post(this.common.rooturl+'/ReportViewer/ProvisionForDepreciationOfFixedAssets/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'AccountID': AccountID,'databaseID':databaseID});
  }
  DepreciationOfFixedAsset(startDate: string,endDate: string, companyBranchCode: string,AccountID: string,  databaseID:string){
    return this.http.post(this.common.rooturl+'/ReportViewer/DepreciationOfFixedAssets/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'AccountID': AccountID,'databaseID':databaseID});
  }
  LastDurationGoods(startDate: string, companyBranchCode: string, databaseID:string){
    return this.http.post(this.common.rooturl+'/ReportViewer/LastDurationGoods/',
    {'startDate':startDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID});
  }
  MonthlyAnalisisForEntriesModel(startDate: string, companyBranchCode: string, entryID: string, databaseID:string ){
    return this.http.post(this.common.rooturl+'/ReportViewer/MonthlyAnalisisForEntriesModel/',{'startDate':startDate,'companyBranchCode':companyBranchCode,'entryID': entryID,'databaseID':databaseID});
  }
  MonthlyAnalisisForAccounts(startDate: string, companyBranchCode: string, AccountID: string, databaseID:string ){
    return this.http.post(this.common.rooturl+'/ReportViewer/MonthlyAnalisisForAccounts/',{'startDate':startDate,'companyBranchCode':companyBranchCode,'AccountID': AccountID,'databaseID':databaseID});
  }
  OpeningEntries(startDate: string, companyBranchCode: string, databaseID:string ){
    return this.http.post(this.common.rooturl+'/ReportViewer/OpeningEntries/',{'startDate':startDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID});
  }
  AccountTotalBalance(startDate: string, companyBranchCode: string, AccountID: string, databaseID:string )
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/AccountTotalBalance/',
    {'startDate':startDate,'companyBranchCode':companyBranchCode,'AccountID': AccountID,'databaseID':databaseID});
  }
  GeneralDaily(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/GeneralDaily/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID});
  }
  Institutionfees(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string,type:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/Institutionfees/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID,'type':type});
  }
  InstitutionTrialBalance(startDate: string,   databaseID:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/InstitutionTrialBalance/',
    {'startDate':startDate,'databaseID':databaseID});
  }
  BranchesTrialBalance(startDate: string, companyBranchCode: string, databaseID:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/BranchesTrialBalance/',
    {'startDate':startDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID});
  }
  FixedAssetsOfInstitution(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/FixedAssetsOfInstitution/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID});
  }
  FixedAssetsAdditions(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/FixedAssetsAdditions/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID});
  }
  TotalExclusionOfFixedAssets(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/TotalExclusionOfFixedAssets/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID});
  }
  DepreciationOfFixedAssets(startDate: string,endDate: string, companyBranchCode: string,  databaseID:string)
  {
    return this.http.post(this.common.rooturl+'/ReportViewer/DepreciationOfFixedAssets/',
    {'startDate':startDate,'endDate': endDate,'companyBranchCode':companyBranchCode,'databaseID':databaseID});
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
