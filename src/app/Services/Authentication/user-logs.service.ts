import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../Share/common.service';

@Injectable({
  providedIn: 'root'
})
export class UserLogsService {

  constructor(private http:HttpClient,private common:CommonService) { }

  GetHistory(){
     debugger;
    return this.http.get(this.common.rooturl+'/UserLogs/GetHistory');

  }
}
