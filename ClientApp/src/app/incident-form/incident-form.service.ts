import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncidentFormService {

  constructor(private client: HttpClient) { }

  getDropDownValues(): string[] {
    return ["one","two","three"];
  }

}
