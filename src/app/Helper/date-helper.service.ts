import { Injectable } from '@angular/core';
import { __values } from 'tslib';
import * as $ from 'jquery';
 import HijriDate,{toHijri} from 'hijri-date/lib/safe'; 

@Injectable({
  providedIn: 'root'
})
export class DateHelperService {

  constructor() { }
    // Initialize Date 
    today:any = new Date();
    dd:any ;
    mm:any;


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

    GetCurrentDate(){
      debugger;
      this.today=new Date();
      this.dd = this.today.getDate();
      this.mm = this.today.getMonth() + 1; //January is 0!
    
    var yyyy = this.today.getFullYear();
    if (this.dd < 10) {
       this.dd = '0' + this.dd;
    } 
    if (this.mm < 10) {
      this.mm = '0' + this.mm;
    } 
    // this.today = this.mm + '/' + this.dd + '/' + yyyy;
    this.today = this.dd + '/' + this.mm + '/' + yyyy;
     return this.today;
    }

    GetHijri(dt:any){
      debugger;
      // change string date to date
    var convDT=new Date(dt);
    
    // // change hijri date
    // var tdHijri = toHijri(convDT); 
    
    // // merge date compponents
    // var day=tdHijri._date;
    // var month=tdHijri._month;
    // var year=tdHijri._year;
    
    // tdHijri=month+'/'+day+'/'+year;
    // console.log('now higri : ',tdHijri);
    // return tdHijri;
    }
}
