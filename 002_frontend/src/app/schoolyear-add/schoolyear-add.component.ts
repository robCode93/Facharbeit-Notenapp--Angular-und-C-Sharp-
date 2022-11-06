import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolYearService } from '../api/services';

@Component({
  selector: 'app-schoolyear-add',
  templateUrl: './schoolyear-add.component.html',
  styleUrls: ['./schoolyear-add.component.css']
})
export class SchoolyearAddComponent implements OnInit {

  title: string = "Schuljahr hinzufügen";
  subTitle: string = "Lege ein neues Schuljahr an";

  constructor(private schoolYearService: SchoolYearService, private router: Router) { }

  ngOnInit(): void {
  }

}
