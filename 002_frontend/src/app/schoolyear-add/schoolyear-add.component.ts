import { Component, OnInit } from '@angular/core';
import { SchoolYear, School } from '../api/models';
import { SchoolService, SchoolYearService } from '../api/services';

@Component({
  selector: 'app-schoolyear-add',
  templateUrl: './schoolyear-add.component.html',
  styleUrls: ['./schoolyear-add.component.css']
})
export class SchoolyearAddComponent implements OnInit {
  title: string = "Schuljahr anlegen";
  subTitle: string = "Füge ein neues Schuljahr hinzu";
  schoolYear: SchoolYear = {}
  availableSchools: School[] = [];


  constructor(private schoolYearService : SchoolYearService, private schoolService : SchoolService) { 
    this.schoolService.apiSchoolGetAllSchoolsGet$Json().subscribe({
      next: value => this.availableSchools = value
    });
  }

  ngOnInit(): void {
  }

}
