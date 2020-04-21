import { UserLogsModule } from './../../../Models/Autintication/user-logs/user-logs.module';
import { Component, OnInit } from '@angular/core';
import { UserLogsService } from 'src/app/Services/Authentication/user-logs.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-user-logs',
  templateUrl: './user-logs.component.html',
  styleUrls: ['./user-logs.component.css']
})
export class UserLogsComponent implements OnInit {
  result: Array<UserLogsModule>;
  Logs=[];
  constructor(private Ser:UserLogsService,private toastr:ToastrService,  private translate: TranslateService) { }

  ngOnInit() {
    debugger;
    this. SelectHistorydata();
  }
  SelectHistorydata(){
    debugger;
      this.Ser.GetHistory().subscribe(
        res=>{
        debugger;
         this.result=res as Array<UserLogsModule> ;
         if( this.result ==undefined ||  this.result==null){
           return false;

         }
         this.Logs=this.result;
        
        },
        
      );

    
    


  }

}
