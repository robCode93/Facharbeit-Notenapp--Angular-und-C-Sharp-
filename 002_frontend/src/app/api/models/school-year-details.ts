/* tslint:disable */
/* eslint-disable */
import { SchoolDetails } from './school-details';
import { SubjectDetails } from './subject-details';
export interface SchoolYearDetails {
  id?: string;
  name?: null | string;
  school?: SchoolDetails;
  subjects?: null | Array<SubjectDetails>;
}
