import { Component, OnInit } from '@angular/core';
import { DatabaseModule } from 'src/app/Models/DataModels/database/database.module';
import { BranchModule } from 'src/app/Models/DataModels/branch/branch.module';
import { AccountModule } from 'src/app/Models/DataModels/account/account.module';
import { EntryModule } from 'src/app/Models/DataModels/entry/entry.module';
import { ReportsServiceService } from 'src/app/Services/Reports/reports-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DateHelperService } from 'src/app/Helper/date-helper.service';
import { NgForm } from '@angular/forms';
import { ReportModalComponent } from '../../Common/report-modal/report-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var Stimulsoft:any;
declare var StiOptions:any;
@Component({
  selector: 'app-fixed-assets-of-institution',
  templateUrl: './fixed-assets-of-institution.component.html',
  styleUrls: ['./fixed-assets-of-institution.component.css']
})
export class FixedAssetsOfInstitutionComponent implements OnInit {
  options: any = new Stimulsoft.Designer.StiDesignerOptions();
	designer: any = new Stimulsoft.Designer.StiDesigner(this.options, 'StiDesigner', false);
  report:any;
  reportName:string;
  currentLocation:any;
  result: any;
  sDate: any;
  eDate:any;
  DateHijri: any;
  PortfolioID: number;
  dbIds: string;
  ComIDS: string;
  AccIDs: string;
  DbObj: DatabaseModule = new DatabaseModule();
  CBObj: BranchModule = new BranchModule();
  AccObj: AccountModule = new AccountModule();
  EntObj: EntryModule = new EntryModule();
  DbNames: DatabaseModule[];
  Accounts: AccountModule[];
  Entries: EntryModule[];
  Branches: BranchModule[];
  PortfolioNameARtxt: string = '';
  PageName: string;
  ToastrMsg: string;
  public iconFieldsPort: Object = {};
  public iconWaterMarkPort: string = "";
  constructor(private ReportSer: ReportsServiceService, private toastr: ToastrService,
  private router: Router, private datehelp: DateHelperService, private translate: TranslateService,private modalService:NgbModal) { }
    ngOnInit() {
      this.toastr.warning(this.ToastrMsgTranslate("ToastrMsg.Reporttoster"), this.PageName);
      this.sDate = this.datehelp.GetCurrentDate();
      this.eDate = this.datehelp.GetCurrentDate();
      this.BreadCrumTranslate();
      this.SelectDatabase();
    }
    PickCom(event){
      debugger;
      this.ComIDS = event[0].COM_BRN_CODE;
      for(var i = 1; i< event.length ; i++)
      {
        var id= event[i].COM_BRN_CODE;
        this.ComIDS += ','+ id;
      }
    }
    PickAcc(event){
      debugger;
      this.AccIDs = event[0].ACC_ID;
      for(var i = 1; i< event.length ; i++)
      {
        var id= event[i].ACC_ID;
        this.AccIDs += ','+ id;
      }
    }
    pick(event){
      debugger;
      this.dbIds = event[0].DatabaseNameId;
      for(var i = 1; i< event.length ; i++)
      {
        debugger;
        var id= event[i].DatabaseNameId;
        this.dbIds += ','+ id;
      }
      this.SelectBranches();
      this.SelectAccounts();
    }
    BreadCrumTranslate() {
      debugger;
      this.translate.get(["ResultOfPortPage.breadcrumb"])
        .subscribe((translations: string) => {
          this.PageName = translations["ResultOfPortPage.breadcrumb"];
        });
    }
    // Translate Toastr MSg
    ToastrMsgTranslate(Msg: string) {
      this.translate.get([Msg])
        .subscribe((translations: string) => {
          this.ToastrMsg = translations[Msg];
        });
      return this.ToastrMsg;
    }
    Submit(frm: NgForm) {
      debugger;
      this.ViewReport();
    }
  
    convertDate(date:any){
      var arr = date.split("/");
      return arr[2]+"/"+arr[1]+"/"+arr[0]
    }
    ViewReport() {
      debugger;
      this.currentLocation = window.location;
      this.sDate = (<HTMLInputElement>document.getElementById("gregDate"))
        .value ? (<HTMLInputElement>document.getElementById("gregDate")).value : null;
        this.eDate = (<HTMLInputElement>document.getElementById("gregDate2"))
        .value ? (<HTMLInputElement>document.getElementById("gregDate2")).value : null;
        let SDateParam = this.convertDate(this.sDate);
        let EDateParam = this.convertDate(this.eDate);
        debugger;
        let reportParams: string =
            "reportParameter=STARTDATE!" + SDateParam + 
            "&reportParameter=ENDDATE!" + EDateParam + 
            "&reportParameter=CompanyBranchID!" + this.ComIDS + 
            "&reportParameter=DatabaseID!" + this.dbIds ;
            const modalRef = this.modalService.open(ReportModalComponent);
          //modalRef.componentInstance.name = 'World';
          modalRef.componentInstance.reportParams = reportParams;
          modalRef.componentInstance.reportType = 1;
          modalRef.componentInstance.reportTypeID = 12;
          modalRef.componentInstance.oldUrl = "FixedAssetsOfInstitution";
    }
  
    onSelectPortfolio(selectedItem: any, modalId: any) {
      debugger;
      this.PortfolioID = selectedItem.PortfolioID ? selectedItem.PortfolioID : 0;
      this.PortfolioNameARtxt = selectedItem.NameAR ? selectedItem.NameAR : '';
    }
  
    SelectDatabase() {
      debugger;
      this.ReportSer.GetDbNames().subscribe(
        res => {
          // this.portfolios=res as Portfolio[] ;
          debugger;
          this.DbNames = res as DatabaseModule[];
        },
        err => {
          this.toastr.error(this.ToastrMsgTranslate("ToastrMsg.UnExpError"), this.PageName);
  
        }
      );
    }
    SelectAccounts() {
      debugger;
  
      this.ReportSer.GetAccounts(this.dbIds).subscribe(
        res => {
          // this.portfolios=res as Portfolio[] ;+
          this.Accounts = res as AccountModule[];
        },
        err => {
          this.toastr.error(this.ToastrMsgTranslate("ToastrMsg.UnExpError"), this.PageName);
        }
      );
    }
    SelectBranches() {
      debugger;
      this.ReportSer.GetCompanyBranches(this.dbIds).subscribe(
        res => {
          // this.portfolios=res as Portfolio[] ;
          this.Branches = res as BranchModule[];
        },
        err => {
          this.toastr.error(this.ToastrMsgTranslate("ToastrMsg.UnExpError"), this.PageName);
  
        }
      );
    }
   
}
