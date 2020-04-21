import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../Share/common.service';

@Injectable({
  providedIn: 'root'
})
export class SellPurchaseService {

  constructor(private http:HttpClient,private common:CommonService) { }

  GetAllports(){

    return this.http.get(this.common.rooturl+'/Notice/GetPortfolios');
  }

  PreviewReport(obj){
    // startDate=startDate.replace(/\//g, "-");
    // endDate=endDate.replace(/\//g, "-");

    debugger;
    return this.http.post(this.common.rooturl+'/ReportViewer/SellPurchase',obj);

  }

}
