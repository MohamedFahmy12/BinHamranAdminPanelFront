import { MustMatchDirective } from './Helper/must-match-directive';
import { AuthInterceptor } from './Helper/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ChildMessageComponent } from './child-message/child-message.component';
import { ForbiddenComponent } from './Component/Autentication/forbidden/forbidden.component';
import { LoginComponent } from './Component/Autentication/login/login.component';
import { FormsModule } from '@angular/forms';
import {AgGridModule} from "ag-grid-angular";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {APP_BASE_HREF} from '@angular/common'; 
import {  HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppLayoutComponent } from './Layout/app-layout/app-layout.component';
import { DashboardComponent } from './Component/Common/dashboard/dashboard.component';
import { UserLogsComponent } from './Component/Autentication/user-logs/user-logs.component';
import { MonthlyAnalisisForEntriesModelComponent } from './Component/Reports/monthly-analisis-for-entries-model/monthly-analisis-for-entries-model.component';
import { MonthlyAnalisisForAccountsComponent } from './Component/Reports/monthly-analisis-for-accounts/monthly-analisis-for-accounts.component';
import { ViewReportsComponent } from './Component/Reports/view-reports/view-reports.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';   


// import { NgSelect2Module } from 'select2';









  

@NgModule({
  declarations: [
    AppComponent,
    ChildMessageComponent,
    LoginComponent,
    ForbiddenComponent,
    AppLayoutComponent,
    DashboardComponent,
    UserLogsComponent,
    MustMatchDirective,
    MonthlyAnalisisForEntriesModelComponent,
    MonthlyAnalisisForAccountsComponent,
    ViewReportsComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([
      ChildMessageComponent,
      
    ]) ,
    MultiSelectModule,
    
    AccordionModule,
    NgMultiSelectDropDownModule,
    NgSelectModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    MultiSelectAllModule ,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // NgSelect2Module
    // UiSwitchModule

  // AgGridModule.withComponents([PartialMatchFilter]),
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },
   
{
   provide: HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
] ,
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
