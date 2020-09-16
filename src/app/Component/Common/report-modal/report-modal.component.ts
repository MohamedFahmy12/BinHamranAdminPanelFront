import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from 'src/app/Services/Reports/ReportService';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/Share/common.service';
import { ReportFile } from 'src/app/Models/DataModels/reports/report-files';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {

  @Input() reportParams;
  @Input() reportType;
  @Input() reportTypeID;
  @Input() oldUrl;
  @Input() reportVariables;

  reportList: ReportFile[] = [];

  constructor(public activeModal: NgbActiveModal,
  private rptSrv: ReportService,
  private router:Router, private common:CommonService) { }
  ngOnInit() {
      //console.log("Modal Init");
      //console.log(this.name);
      //console.log(this.reportParams);
      console.log(this.reportType);
      console.log(this.reportTypeID);

      this.rptSrv.setReportList(this.reportType, this.reportTypeID).then(a=>{
          console.log(a);
          this.rptSrv.getReportList().subscribe(r=>{
            debugger;
              this.reportList = r;
          });
      });
      


      // this.rptSrv.setReportList(1,1);
      // this.rptSrv.getReportList().subscribe(r => {
      //     this.reportList = r;
      // }, err => { }, () => {

      // });

  }

  ngOnDestroy() { }


  close() {
      this.activeModal.close('Close click');
  }

  viewRpt(selectedRpt:ReportFile)
  {
      let reportData = {
          reportName:selectedRpt.ReportNameAr,
          reportParams:this.reportParams,
      };
      console.log(reportData);
      //var newUrl= window.location.href.replace(this.oldUrl, "ReportViewer")+"?reportType="+this.reportType+"--reportTypeID="+this.reportTypeID+"--id="+selectedRpt.reportNameAr+"&"+this.reportParams;
      let params:string= "";
      
      var newUrl = this.common.pathUrl+"Viewer/Reports?id=" + selectedRpt.ReportNameAr + "&reportParameter=reportType!" + this.reportType + "&reportParameter=reportTypeID!" +this.reportTypeID + "&"+this.reportParams;
      //this.router.navigate(['ReportViewer', {params:reportData}]);
      //window.location.href = newUrl;
      window.open(newUrl, "_blank");    
      this.close();
      
      // this.rptSrv.setReportData(reportData).then(d=>{
         
      // });
      
      //this.router.navigate(['ReportViewer']);
     
      
  }
  designRpt(selectedRpt:ReportFile)
  {
      let reportData = {
          reportName:selectedRpt.ReportNameAr,
          reportParams:this.reportParams
      };
      console.log(reportData);
      //var newUrl= window.location.href.replace(this.oldUrl, "ReportDesigner")+"?reportType="+this.reportType+"--reportTypeID="+this.reportTypeID+"--id="+selectedRpt.reportNameAr+"&"+this.reportParams;
      var newUrl = this.common.pathUrl+"Designer/Reports?id=" + selectedRpt.ReportNameAr + "&reportParameter=reportType!" + this.reportType + "&reportParameter=reportTypeID!" +this.reportTypeID + "&"+this.reportParams;
      //this.router.navigate(['ReportViewer', {params:reportData}]);
      //window.location.href = newUrl;
      window.open(newUrl, "_blank");    
      this.close();       
     
  }
  setAsDefaultRpt(selectedRpt:ReportFile)
  {
      this.rptSrv.setDefaultReport(selectedRpt.Id, this.reportType, this.reportTypeID).subscribe(d=>{
          if(d=="OK")
          {
              this.viewRpt(selectedRpt);
              this.close();
          }
          else{
              console.log(d);
          }
      });
  }

  deleteRpt(selectedRpt:ReportFile)
  {
      this.rptSrv.deleteReport(selectedRpt.Id).subscribe(d=>{
          if(d=="OK")
          {
              this.close();
          }
          else{
              console.log(d);
          }
      });
  }


}
