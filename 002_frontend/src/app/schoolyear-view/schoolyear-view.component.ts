import { Component, OnInit } from '@angular/core';
import { School, SchoolYear } from '../api/models';
import { SchoolYearService } from '../api/services';
import { SchoolService } from '../api/services';

@Component({
  selector: 'app-schoolyear-view',
  templateUrl: './schoolyear-view.component.html',
  styleUrls: ['./schoolyear-view.component.css']
})
export class SchoolyearViewComponent implements OnInit {
  title: string = "Schuljahre";
  subTitle: string = "Deine Schuljahre - Übersicht";
  schoolYears: SchoolYear[] = [];
  currentSchool: School = {};


  constructor(private schoolYearService : SchoolYearService, private schoolService : SchoolService) { 
    this.schoolYearService.apiSchoolYearGetAllSchoolYearsGet$Json().subscribe({
      next: value => this.schoolYears = value
    });
  }

  ngOnInit(): void {
  }

  onLoad(school : School){
    this.schoolService.apiSchoolIdGetSchoolByIdGet$Json({
      id: school.id as string
    }).subscribe({
      next: val => this.currentSchool = val
    });
  }


}
