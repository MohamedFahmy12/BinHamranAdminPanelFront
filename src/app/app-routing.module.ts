import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Component/Common/dashboard/dashboard.component';
import { LoginComponent } from './Component/Autentication/login/login.component';
import { AppLayoutComponent } from './Layout/app-layout/app-layout.component';
import { AuthGuard } from './Helper/auth.guard';
import { ForbiddenComponent } from './Component/Autentication/forbidden/forbidden.component';
import { MonthlyAnalisisForAccountsComponent } from './Component/Reports/monthly-analisis-for-accounts/monthly-analisis-for-accounts.component';
import { MonthlyAnalisisForEntriesModelComponent } from './Component/Reports/monthly-analisis-for-entries-model/monthly-analisis-for-entries-model.component';
import { ViewReportsComponent } from './Component/Reports/view-reports/view-reports.component';
import { OpiningEntryComponent } from './Component/Reports/opining-entry/opining-entry.component';
import { AccountTotalBalanceComponent } from './Component/Reports/account-total-balance/account-total-balance.component';
import { GeneralDailyComponent } from './Component/Reports/general-daily/general-daily.component';
import { InstitutionfeesComponent } from './Component/Reports/institutionfees/institutionfees.component';
import { InstitutionTrialBalanceComponent } from './Component/Reports/institution-trial-balance/institution-trial-balance.component';
import { BranchesTrialBalanceComponent } from './Component/Reports/branches-trial-balance/branches-trial-balance.component';

const routes: Routes = [
  //no layout routes
  { path: '',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent},

    // App routes goes here here
 {
    path: '',
  component: AppLayoutComponent, 
  canActivateChild:[AuthGuard],
  children: [
    {path:'dashboard',component:DashboardComponent},
    {path:'forbidden', component:ForbiddenComponent},
    {path:'MonthlyAnalisisForAccounts', component:MonthlyAnalisisForAccountsComponent},
    {path:'MonthlyAnalisisForEntriesModel', component:MonthlyAnalisisForEntriesModelComponent},
    {path:'OpiningEntries', component:OpiningEntryComponent},
    {path:'AccountTotalBalance', component:AccountTotalBalanceComponent},
    {path:'GeneralDaily', component:GeneralDailyComponent},
    {path:'Institutionfees', component:InstitutionfeesComponent},
    {path:'InstitutionTrialBalance', component:InstitutionTrialBalanceComponent},
    {path:'BranchesTrialBalance', component:BranchesTrialBalanceComponent},
    {path:'ViewReport',component:ViewReportsComponent,data:{permittedRoles:['SuperAdmin','Admin']}},
    { path: '**', redirectTo: '' }



  ]
},

  // otherwise redirect to home



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return 'partner';
}

