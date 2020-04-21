import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../Share/common.service';

@Injectable({
  providedIn: 'root'
})
export class TotalProfitsInYearsService {

  constructor(private http:HttpClient,private common:CommonService) { }

  GetAllports(){

    return this.http.get(this.common.rooturl+'/Notice/GetPortfolios');
  }


 PreviewReport(portfolioId:number,startDate:string,endDate:string){


    debugger;
    return this.http.post(this.common.rooturl+'/ReportViewer/TotalProfitsAllYears/',{'portfolioId':portfolioId,'startDate':startDate,'endDate':endDate} );


  }
}
