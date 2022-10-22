/* tslint:disable */
/* eslint-disable */
import { Grad } from './grad';
import { SchoolYear } from './school-year';
export interface Subject {
  grads?: null | Array<Grad>;
  id?: string;
  name?: null | string;
  schoolYear?: SchoolYear;
  shortName?: null | string;
}
