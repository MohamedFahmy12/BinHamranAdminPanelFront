import { Component, OnInit } from '@angular/core';
import { ReportsServiceService } from 'src/app/Services/Reports/reports-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
declare var Stimulsoft: any;
@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  portfolioId:number=0;
  partnerId:any='';
  fromDate:any;
  toDate:any;
  options: any = new Stimulsoft.Viewer.StiViewerOptions();
  viewer: any = new Stimulsoft.Viewer.StiViewer(this.options, 'StiViewer', false);
  report: any = new Stimulsoft.Report.StiReport();
  constructor(private service:ReportsServiceService,private toastr:ToastrService,   private route :ActivatedRoute) { }

  ngOnInit() {
 
     Stimulsoft.Base.StiLicense.key = "6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHlkHnETZDQa/PS+0KAqyGT4DpRlgFmGegaxKasr/6hj3WTsNs" +
    "zXi2AnvR96edDIZl0iQK5oAkmli4CDUblYqrhiAJUrUZtKyoZUOSwbjhyDdjuqCk8reDn/QTemFDwWuF4BfzOqXcdV" +
     "9ceHmq8jqTiwrgF4Bc35HGUqPq+CnYqGQhfU3YY44xsR5JaAuLAXvuP05Oc6F9BQhBMqb6AUXjeD5T9OJWHiIacwv0" +
     "LbxJAg5a1dVBDPR9E+nJu2dNxkG4EcLY4nf4tOvUh7uhose6Cp5nMlpfXUnY7k7Lq9r0XE/b+q1f11KCXK/t0GpGNn" +
     "PL5Xy//JCUP7anSZ0SdSbuW8Spxp+r7StU/XLwt9vqKf5rsY9CN8D8u4Mc8RZiSXceDuKyhQo72Eu8yYFswP9COQ4l" +
     "gOJGcaCv5h9GwR+Iva+coQENBQyY2dItFpsBwSAPvGs2/4V82ztLMsmkTpoAzYupvE2AoddxArDjjTMeyKowMI6qtT" +
     "yhaF9zTnJ7X7gs09lgTg7Hey5I1Q66QFfcwK";

    this.PreviewReport();
  }

  PreviewReport()
  {
    debugger;
      
     this.report.loadDocument(this.route.snapshot.paramMap.get('Reportview'));
     this.viewer.report = this.report;
     console.log("reeee", this.report);
     this.viewer.renderHtml('viewer');
    
  }

}
