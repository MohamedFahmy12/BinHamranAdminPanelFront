import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonService } from '../Share/common.service';
//import { DemoData } from '../Models/DemoData';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReportFile } from '../../Models/DataModels/reports/report-files';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
interface Location {
  latitude: string;
  longitude: string;

}

@Injectable({
  providedIn: 'root'
})

export class ReportService {

  public reportingserverurl: string;
  public reportingurl: string;

  private reportListObs: BehaviorSubject<ReportFile[]> = new BehaviorSubject([]);
  reportList: ReportFile[] = [];
  //private reportDataObs:BehaviorSubject<any> = new BehaviorSubject({});


  reqHeader = new HttpHeaders({
    'No-Auth': 'True'
  });
  public token: String;
  constructor(private http: HttpClient,private common:CommonService) {
  }


  setReportList(reportType, reportTypeID): Promise<boolean> {
    return new Promise((acc, rej) => {
      this.getReportListFromApi(reportType, reportTypeID).subscribe(rpt => {
        this.reportList = rpt;

      }, err => {
        acc(false);
      }, () => {
        console.log(this.reportList);
        this.reportListObs.next(this.reportList);
        acc(true);
      });

    });
  }


  getReportList(): Observable<ReportFile[]> {
    return this.reportListObs.asObservable();
  }

  getReportListFromApi(reportType, reportTypeID): Observable<ReportFile[]> {
    debugger
    let params = {
      reportType: reportType,
      reportTypeID: reportTypeID
    }
    return this.http.get<ReportFile[]>(this.common.rooturl + '/ReportViewer/getReportList', {
      headers: new HttpHeaders().append('Authorization', `Bearer ${this.token}`),
      params: params
    });
  }


  setDefaultReport(reportID, reportType, reportTypeID): Observable<string> {
    return this.http.post<string>(this.common.rooturl + "/ReportViewer/setDefaultReport?reportId="+reportID+
    "&reportType="+reportType+"&reportTypeId="+reportTypeID, {
      headers: new HttpHeaders().append('Authorization', `Bearer ${this.token}`)});
  }

  deleteReport(reportID):Observable<string>
  {
    return this.http.post<string>(this.common.rooturl + "/ReportViewer/deleteReport?reportID="+reportID, {
      headers: new HttpHeaders().append('Authorization', `Bearer ${this.token}`)});
  }

  //========================End Mosfet=================================================

}
