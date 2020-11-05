import { RootObject } from './../Models/Models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_ENDPOINT: string = "https://api.spaceXdata.com/v3/launches?limit=100";

  constructor(private http: HttpClient) { }

  getLaunchData(year?: string, launchSuccess?: string, landSuccess?: string): Observable<RootObject[]> {
    // parms are used to manipulate the end-url
    let params = new HttpParams();
    if (year != undefined) params = params.append('launch_year', year);
    if (launchSuccess != undefined) params = params.append('launch_success', launchSuccess);
    if (landSuccess != undefined) params = params.append('land_success', landSuccess);

    return this.http.get<RootObject[]>(this.API_ENDPOINT, { params: params })
  }

}
