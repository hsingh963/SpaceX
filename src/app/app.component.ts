import { DataService } from './../Services/data.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FlightData } from 'src/Models/Models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX';
}
