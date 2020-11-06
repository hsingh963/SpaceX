import { RootObject } from "./../../../Models/Models";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataService } from "src/Services/data.service";
import { FlightData } from "src/Models/Models";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit ,OnDestroy{

  allFlights: FlightData[] = []; // to store the flight data to be displayed in UI
  res: RootObject[] = []; // to store the entire response

  // below filters are used to manipulate the end point i.e they are used as the query parms for the URL
  yearFilter: string;
  launchSuccessFilter: string;
  landSuccessFilter: string;

  // to handle the unsubscription of Obaservable
  private subscription:Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.GetFlightData();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); // unsubscribe to prevent memory leak
  }

  // MapFlightObject() --> used to map the response object and push it to allFlights
  // as the reponse contains too many unused props
  MapFlightObject() {
    this.allFlights = [];
    for (const r of this.res) {
      this.allFlights.push({
        mission_name: r.mission_name,
        mission_id:
          r.mission_id.length > 0 ? r.mission_id : ['No mission id availabe'],
        launch_year: r.launch_year,
        launch_success: r.launch_success,
        land_success: r.rocket.first_stage.cores[0].land_success,
        imgURL: r.links.mission_patch,
      });
    }
  }

  FilterLaunchByYear(year: any) {
    year > 0 ? (this.yearFilter = year) : (this.yearFilter = null);
    this.GetFlightData();
  }

  FilterByLaunchSuccess(success: string) {
    if(success==='null'){
      this.launchSuccessFilter=undefined
    }
    else{
      this.launchSuccessFilter = success;
    }
    this.GetFlightData();
  }

  FilterByLandSuccess(success: string) {
    if(success==='null'){
      this.landSuccessFilter=undefined
    }
    else{
      this.landSuccessFilter = success;
    }
    this.GetFlightData();
  }

  // GetFlightData() --> used to fetch the data from service based on the filters applied
  GetFlightData() {
    this.subscription = this.dataService
      .getLaunchData(
        this.yearFilter,
        this.launchSuccessFilter,
        this.landSuccessFilter
      )
      .subscribe(
        (res: RootObject[]) => {
        this.res = res;
        this.MapFlightObject();
      },
      (error) => { this.allFlights = []; }
      );
  }
}
