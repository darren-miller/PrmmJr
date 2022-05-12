import { Component, OnInit } from '@angular/core';
import { IncidentFormService } from './incident-form.service';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {

  constructor(private incidentFormService: IncidentFormService) { }

  ngOnInit(): void {
    this.incidentFormService.getDropDownValues();
  }
  public ddValues: string[];
}
