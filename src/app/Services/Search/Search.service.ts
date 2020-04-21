import { Injectable } from '@angular/core';
import { CommonService } from '../Share/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class SearchService {

    constructor(private http:HttpClient,private common:CommonService) { }
    
    SearchByCode(TableNumber:any,Code:any){
      debugger;
      return this.http.get(this.common.rooturl+'/Search/'+TableNumber+'/'+Code);
  
    }
  
  }
  

