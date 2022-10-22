/* tslint:disable */
/* eslint-disable */
import { School } from './school';
import { Subject } from './subject';
export interface SchoolYear {
  id?: string;
  name?: null | string;
  school?: School;
  subjects?: null | Array<Subject>;
}
