import {  TestBed } from "@angular/core/testing";
import { DataService } from "./data.service";
import {  HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientModule],
          providers: [DataService]
      });
      service = TestBed.get(DataService);
  });

  it('should create the instance of Data Service', () => {
    expect(service).toBeTruthy();
  });
  
});

