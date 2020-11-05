import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  // array to initialize the years 
  years:any[]=['2006','2007','2008','2009','2010','2011','2012','2013','2014',
                '2015','2016','2017','2018','2019','2020'];

 // below output props are used to pass updated data to parent compoenent (HomeComponent)
  @Output() yearFilter: EventEmitter<number> =   new EventEmitter();
  @Output() launchSuccessFilter: EventEmitter<boolean> =   new EventEmitter();
  @Output() landSuccessFilter: EventEmitter<boolean> =   new EventEmitter();

  // to pass the selected year to HomeComponent
  filterByYear(e:any){
    this.yearFilter.emit(e.target.value);
  }

  // to pass the Launch Success to HomeComponent
  filterByLaunchSuccess(e:any){
    this.launchSuccessFilter.emit(e.target.value);
  }

  // to pass the Land Success to HomeComponent
  filterByLandSuccess(e:any){
    this.landSuccessFilter.emit(e.target.value);
  }

}
