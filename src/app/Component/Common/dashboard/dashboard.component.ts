import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Authentication/login.service';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/Services/Dashboard/dashboard.service';
import { CommonService } from 'src/app/Services/Share/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
   //template: `<app-modals (valueChange)='displayCounter($event)'></app-modals>`,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accModal: boolean = false;
  constructor(private data: CommonService, private DashboardSer: DashboardService, private loginSer: LoginService,
     private route: ActivatedRoute) {
    console.log(this.textColor)
  }
  TotalsellingOrders: number = 0;
  TotalPurchaseOrders: number = 0;
  TotalSellingInvoice: number = 0;
  TotalPurchaseInvoice: number = 0;
  // Total:number=0;
  Partners: number = 0;
  root: any;
  textColor: string[] = ['text-warning', 'text-primary', 'text-danger'];
  navbarsFooterStaticFromJson: any;
  // getJsonNavsBottom(){
  //   debugger;
  //   this.DashboardSer.getJsonSideBars().subscribe(res=>{
  //    let json:any;
  //    json=res;
  //   //  this.getAllNavbarBottom();
  //   console.log("res",res)
  //   console.log("json",json)
  //     this.navbarsFooterStaticFromJson= json.sideBarMenu; //أسم الKey الى في ملف الترجمة
  //     console.log("this.navbarsFooterStaticFromJson",this.navbarsFooterStaticFromJson)
  //   })
  //  }
  ngOnInit() {
    this.root = this.data.rooturl.replace("api", "");

  }

  showModal() {
    debugger;
    this.accModal = true;
  }
  displayCounter(count) {
    alert(count);
  }
}
