import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from '../Share/common.service';
import { LoginmodelModule } from 'src/app/Models/Autintication/Loginmodel/Loginmodel.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private common:CommonService) { }

    // Functions
    Post(Login:LoginmodelModule){

      return this.http.post(this.common.rooturl+'/Account/Login',Login);
    }

    GetUserProfile()
    {
debugger;
      return this.http.get(this.common.rooturl+'/UserProfile/GetUserProfile');
    }
    roleMatch(allowedRoles):boolean
    {
      var isMatch=false;
      var payLoad=JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
      var userRole=payLoad.role;
      allowedRoles.forEach(element => {
        if(userRole==element)
        {
            isMatch=true;
            return false;
        }
      });
      return isMatch;
    }
}
