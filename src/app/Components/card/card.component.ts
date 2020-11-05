import { FlightData } from './../../../Models/Models';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input('flight') flight: FlightData;
  
  missionID:string[];
  land_success:any;

  ngOnInit() {
    this.missionID=this.flight.mission_id;
    //If landing success is not present, display user friendly message
    this.land_success=this.flight.land_success!=undefined?this.flight.land_success:"N.A"
  }

}
