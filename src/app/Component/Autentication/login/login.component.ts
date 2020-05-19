import { Component, OnInit } from '@angular/core';
import { LoginmodelModule } from 'src/app/Models/Autintication/loginmodel/loginmodel.module';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Authentication/login.service';
import { ToastrService } from 'ngx-toastr';


declare function require(name: string): any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginobj: LoginmodelModule = new LoginmodelModule();

  constructor(private LoginSer:LoginService, private router: Router, private toastr: ToastrService) {


   }
   ngOnInit() {
debugger;
    if(localStorage.getItem('token')!=null)
    {
      this.router.navigateByUrl('/dashboard');
    }
    else
    {
      require("style-loader!../../../../assets/css/main-rtl.css");
    }


  }





  //start :Login
onSubmit(){
debugger;
  this.LoginSer.Post(this.loginobj).subscribe(
    (res:any) =>{
debugger;
localStorage.setItem('token',res.token);
localStorage.setItem('lan','ar');
// this.router.navigate(['/', 'dashboard']).then(nav => {
//   window.location.reload();
//   console.log(nav); // true if navigation is successful


// }, err => {
//   console.log(err) // when there's an error
// });
this.router.navigateByUrl('/dashboard');
window.location.reload();


    },
    err=>{
        if(err.status==400)
        {
          this.toastr.error('خطأ في إسم المستخدم أو كلمة المرور', 'تسجيل الدخول');
        }
        else
        console.log(err);
    }
  );

}}
