import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationUserModelModule } from 'src/app/Models/Autintication/application-user-model/application-user-model.module';
import { LoginService } from 'src/app/Services/Authentication/login.service';
import { TranslateService } from '@ngx-translate/core';
import { DateHelperService } from 'src/app/Helper/date-helper.service';
import { __values } from 'tslib';
// import * as $ from 'jquery';
import { NgxSpinnerService } from "ngx-spinner";

declare function require(name: string): any;
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent implements OnInit {
  AppLayobj:ApplicationUserModelModule=new ApplicationUserModelModule();
  usabtn:boolean=true;
  saudibtn:boolean=true;
  lan:string;
  loading = true;
  loaded = false;

  constructor( private datehelp:DateHelperService,private router:Router,
    private loginSer:LoginService,private translate: TranslateService, private SpinnerService: NgxSpinnerService) {
     translate.setDefaultLang('ar');
  }


  ngOnInit() {
    this.FirstOpen();
    // let Loading = document.querySelector('.body-loading');
    // let LoadingImg = document.querySelector('.lds-ellipsis');

  //   window.onload = () => {
  //     // Hide Loading
  //     setTimeout( () => {
  //         LoadingImg.classList.add('img-hide');
  //     }, 600);
  //     setTimeout( () => {
  //         Loading.classList.add('img-hide');
  //     }, 800);
  //     setTimeout( () => {
  //         Loading.remove()
  //     }, 1000);
  // }
  this.datehelp.hijiri_melady();
  this.GetDashboardDetails();
  }
  GetDashboardDetails() {
    this.SpinnerService.show();
       this.SpinnerService.hide();
    }

  hijiri_melady(){
    $(".date_hijiri_melady .form-group .btn_melady").on('click', function() {
      $('.date_hijiri_melady .form-group.date_hijiri').toggleClass('z_index');
      $('.date_hijiri_melady .form-group.date_melady').removeClass('z_index');
  });
  $(".date_hijiri_melady .form-group .btn_hijiri").on('click', function() {
      $('.date_hijiri_melady .form-group.date_melady').toggleClass('z_index');
      $('.date_hijiri_melady .form-group.date_hijiri').removeClass('z_index');
  });

  }
  onLogout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');

  }
  FirstOpen()
  {
    debugger;

    if(localStorage.getItem('lan')=='ar')
{
  this.usabtn=false;
  this.saudibtn=true;
  this.translate.use('ar');
  require("style-loader!../../../assets/css/main-rtl.css");
}
else
{
  this.usabtn=true;
  this.saudibtn=false;
  this.translate.use('en');
  require("style-loader!../../../assets/css/main-ltr.css");
}
      this.loginSer.GetUserProfile().subscribe(
        res=>{

      this.AppLayobj=res as ApplicationUserModelModule;
        },
        err=> {
          console.log(err);
        });

        complete=>{
       //   alert("yyyyyyyy")
        }
  }

  switchLanguage(language: string) {
    debugger;

    window.location.reload();
    localStorage.setItem('lan',language);
  }

searchText:string="";
searchedItem:string="";
oldMainListName:string="";
filterByValue(array, string) {
  return array.filter(o =>
      Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
}


arrayOfTabs = [{ nameEN: 'Dash Board',nameAR: 'لوحة التحكم',className:'dashboard', },

               { nameEN: 'Country Card',nameAR: 'بطاقة البلد',className:'country', },
               { nameEN: 'Partner Card',nameAR: 'بطاقة الشركة',className:'partner', },
               { nameEN: 'Account Card',nameAR: 'بطاقة الحساب',className:'account', },
               { nameEN: 'Employee Card',nameAR: 'بطاقة الموظف',className:'employee', },
               { nameEN: 'Portofolio Card',nameAR: 'بطاقة المحفظة',className:'portfolio', },

               { nameEN: 'Sale Order',nameAR: 'أمر الشراء',className:'Purchase', },
               { nameEN: 'Purchase Order',nameAR: 'أمر البيع',className:'Selling', },
               { nameEN: '',nameAR: 'فاتورة بيع',className:'sellOrder', },
               { nameEN: '',nameAR: 'فاتورة شراء',className:'purchaseOrder', },

               { nameEN: 'Notice Creditor',nameAR: 'إشعار دائن',className:'noticeCredit', },
               { nameEN: 'Notice Debitor',nameAR: 'إشعار مدين',className:'NoticeDebit', },
               { nameEN: 'Riyal Reciept',nameAR: 'سند صرف ريال',className:'realReceipt', },
               { nameEN: 'Check Reciept',nameAR: 'سند صرف شيك',className:'checkReceipt', },
               { nameEN: 'Riyal Exchange',nameAR: 'سند قبض ريال',className:'exchangeVoucher', },
               { nameEN: 'Daily entry bond',nameAR: 'سند قيد يومية',className:'exchangeCheck', },

               { nameEN: 'Result Of Portofolio',nameAR: 'نتيجة عمل المحفظة',className:'ResultportofolioWork', },
               { nameEN: 'Portofolio Evaluation',nameAR: 'تقييم المحفظة',className:'RPTEvaluateport', },
               { nameEN: 'Total Stocks Of Partners In Portofolio',nameAR: 'بيان مجمع بجميع أسهم الشركات في المحفظة ',className:'reportCompaniesSharesInPortfolio', },
               { nameEN: 'Buy and Sell Partner Stocks',nameAR: 'بيع وشراء أسهم شركة',className:'reportSellPurchase', },
               { nameEN: 'Cash Movement Riyal Account For Portofolio',nameAR: 'حركة النقد في حساب الريال للمحفظة',className:'CashMovReyalPortofolio', },
               { nameEN: 'Earnings Collected',nameAR: 'تقرير الارباح المحصلة',className:'RPTEarnings', },
               { nameEN: 'Earnings In Same Year',nameAR: 'الأرباح في نفس العام',className:'reportProfitsYear', },
               { nameEN: 'Total Profits Per Years',nameAR: 'اجمالي الأرباح حسب السنوات',className:'reportTotalProfitsYears', },
               { nameEN: 'Earnings Per Stock And Number Of Bonus Stocks',nameAR: 'الارباح الموزعة للسهم الواحد وعدد الاسهم المجانية-',className:'ProfitsDistributor', },
               { nameEN: 'Distribution of dividends earned on year distributed among the quarters',nameAR: 'توزيع الارباح المحصلة على السنة موزعة على الارباع',className:'Earningscollected', },

               { nameEN: 'Entries Settings',nameAR: 'إعدادات القيود',className:'setting', },
               { nameEN: 'Reports Settings',nameAR: 'إعدادات التقارير',className:'reportSetting', },

               { nameEN: 'Create User',nameAR: 'إنشاء مستخدم',className:'registration', },
               { nameEN: 'user log',nameAR: 'سجل المستخدمين',className:'UserLogs', }
               ];

search()
{
  debugger;
  var arrayOfItem=this.filterByValue(this.arrayOfTabs,this.searchText);
  this.searchedItem=arrayOfItem[0].className;

var e_1, _a;
var elements = document.getElementsByClassName(this.searchedItem);
try {
    for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next())
    {
        var element = elements_1_1.value;
        var mainListName= element.getAttribute("mainListName");
        if(mainListName!=null)
        {
          if(mainListName!=this.oldMainListName)
          {
            this.oldMainListName=mainListName;
            element.click();
          }
        }
        else
        {
          element.click();
        }


    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
    }
    finally { if (e_1) throw e_1.error; }
}
this.searchedItem="";

}

}