import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolYearDetails } from '../api/models';
import { SchoolYearService } from '../api/services';

@Component({
  selector: 'app-schoolyear-view',
  templateUrl: './schoolyear-view.component.html',
  styleUrls: ['./schoolyear-view.component.css']
})
export class SchoolyearViewComponent implements OnInit {

  title: string = "Schuljahre anzeigen lassen";
  subTitle: string = "Deine Übersicht";

  availableSchoolYears: SchoolYearDetails[] = [];


  constructor(private schoolYearService: SchoolYearService, private router: Router) { 

    this.schoolYearService.apiSchoolYearGetAllSchoolYearsGet$Json().subscribe({
      next: sy => this.availableSchoolYears = sy
    });

  }

  ngOnInit(): void {
  }

  navigate(navLink: string){
    this.router.navigate(["/" + navLink])
  }

}
