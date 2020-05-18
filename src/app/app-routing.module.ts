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
import { FixedAssetsOfInstitutionComponent } from './Component/Reports/fixed-assets-of-institution/fixed-assets-of-institution.component';
import { FixedAssetsAdditionsComponent } from './Component/Reports/fixed-assets-additions/fixed-assets-additions.component';
import { TotalExclusionOfFixedAssetsComponent } from './Component/Reports/total-exclusion-of-fixed-assets/total-exclusion-of-fixed-assets.component';
import { DepreciationOfFixedAssetsComponent } from './Component/Reports/depreciation-of-fixed-assets/depreciation-of-fixed-assets.component';
import { ProvisionForDepreciationOfFixedAssetsComponent } from './Component/Reports/provision-for-depreciation-of-fixed-assets/provision-for-depreciation-of-fixed-assets.component';
import { ConsumptionOfDepreciationComponent } from './Component/Reports/consumption-of-depreciation/consumption-of-depreciation.component';
import { LastDurationGoodsComponent } from './Component/Reports/last-duration-goods/last-duration-goods.component';
import { EntriesAnalysisComponent } from './Component/Reports/entries-analysis/entries-analysis.component';

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
    {path:'FixedAssetsOfInstitution', component:FixedAssetsOfInstitutionComponent},
    {path:'FixedAssetsAdditions', component:FixedAssetsAdditionsComponent},
    {path:'TotalExclusionOfFixedAssets', component:TotalExclusionOfFixedAssetsComponent},
    {path:'DepreciationOfFixedAssets', component:DepreciationOfFixedAssetsComponent},
    {path:'ProvisionForDepreciationOfFixedAssets',component:ProvisionForDepreciationOfFixedAssetsComponent},
    {path:'ConsumptionOfDepreciation',component:ConsumptionOfDepreciationComponent},
    {path:'LastDurationGoods',component:LastDurationGoodsComponent},
    {path:'EntriesAnalysis',component:EntriesAnalysisComponent},
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

