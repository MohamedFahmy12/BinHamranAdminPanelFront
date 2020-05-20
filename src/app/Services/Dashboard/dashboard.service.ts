import { Injectable } from '@angular/core';
import { CommonService } from '../Share/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class DashboardService {

    constructor(private http:HttpClient,private common:CommonService) { }

    // public getJsonSideBars() {
    //   return this.http.get("../assets/i18n/ar.json");
    // }


  }
