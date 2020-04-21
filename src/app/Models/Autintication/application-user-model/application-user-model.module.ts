import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleModelModule } from '../role-model/role-model.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApplicationUserModelModule {

    public  Id : string;
    
    public UserName:string; 

    public  Email :string;

    public  Password :string;

    public  ConfirmPassword :string;

    public  FullName :string;

    public  Count :number;

    public Role :string;

    public RoleModels :RoleModelModule[];
}


 
