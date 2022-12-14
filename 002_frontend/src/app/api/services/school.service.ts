/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateSchoolModel } from '../models/create-school-model';
import { HolidayDetails } from '../models/holiday-details';
import { SchoolDetails } from '../models/school-details';
import { UpdateSchoolModel } from '../models/update-school-model';

@Injectable({
  providedIn: 'root',
})
export class SchoolService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSchoolGetAllSchoolsGet
   */
  static readonly ApiSchoolGetAllSchoolsGetPath = '/api/School/GetAllSchools';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolGetAllSchoolsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolGetAllSchoolsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SchoolDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolGetAllSchoolsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SchoolDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolGetAllSchoolsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolGetAllSchoolsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<SchoolDetails>> {

    return this.apiSchoolGetAllSchoolsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolDetails>>) => r.body as Array<SchoolDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolGetAllSchoolsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolGetAllSchoolsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SchoolDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolGetAllSchoolsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SchoolDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolGetAllSchoolsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolGetAllSchoolsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<SchoolDetails>> {

    return this.apiSchoolGetAllSchoolsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolDetails>>) => r.body as Array<SchoolDetails>)
    );
  }

  /**
   * Path part for operation apiSchoolIdGetSchoolByIdGet
   */
  static readonly ApiSchoolIdGetSchoolByIdGetPath = '/api/School/{id}/GetSchoolById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolIdGetSchoolByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdGetSchoolByIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SchoolDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolIdGetSchoolByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SchoolDetails>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolIdGetSchoolByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdGetSchoolByIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SchoolDetails> {

    return this.apiSchoolIdGetSchoolByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolDetails>) => r.body as SchoolDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolIdGetSchoolByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdGetSchoolByIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SchoolDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolIdGetSchoolByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SchoolDetails>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolIdGetSchoolByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdGetSchoolByIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SchoolDetails> {

    return this.apiSchoolIdGetSchoolByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolDetails>) => r.body as SchoolDetails)
    );
  }

  /**
   * Path part for operation apiSchoolIdGetHolidaysOfSchoolGet
   */
  static readonly ApiSchoolIdGetHolidaysOfSchoolGetPath = '/api/School/{id}/GetHolidaysOfSchool';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolIdGetHolidaysOfSchoolGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdGetHolidaysOfSchoolGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<HolidayDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolIdGetHolidaysOfSchoolGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HolidayDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolIdGetHolidaysOfSchoolGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdGetHolidaysOfSchoolGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<HolidayDetails>> {

    return this.apiSchoolIdGetHolidaysOfSchoolGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HolidayDetails>>) => r.body as Array<HolidayDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolIdGetHolidaysOfSchoolGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdGetHolidaysOfSchoolGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<HolidayDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolIdGetHolidaysOfSchoolGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HolidayDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolIdGetHolidaysOfSchoolGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdGetHolidaysOfSchoolGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<HolidayDetails>> {

    return this.apiSchoolIdGetHolidaysOfSchoolGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HolidayDetails>>) => r.body as Array<HolidayDetails>)
    );
  }

  /**
   * Path part for operation apiSchoolCreateSchoolPost
   */
  static readonly ApiSchoolCreateSchoolPostPath = '/api/School/CreateSchool';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolCreateSchoolPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolCreateSchoolPost$Response(params?: {
    context?: HttpContext
    body?: CreateSchoolModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolCreateSchoolPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolCreateSchoolPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolCreateSchoolPost(params?: {
    context?: HttpContext
    body?: CreateSchoolModel
  }
): Observable<void> {

    return this.apiSchoolCreateSchoolPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSchoolUpdateSchoolIdPatch
   */
  static readonly ApiSchoolUpdateSchoolIdPatchPath = '/api/School/UpdateSchool/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolUpdateSchoolIdPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolUpdateSchoolIdPatch$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSchoolModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolUpdateSchoolIdPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolUpdateSchoolIdPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolUpdateSchoolIdPatch(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSchoolModel
  }
): Observable<void> {

    return this.apiSchoolUpdateSchoolIdPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSchoolIdDeleteSchoolDelete
   */
  static readonly ApiSchoolIdDeleteSchoolDeletePath = '/api/School/{id}/DeleteSchool';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolIdDeleteSchoolDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdDeleteSchoolDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolIdDeleteSchoolDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolIdDeleteSchoolDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolIdDeleteSchoolDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiSchoolIdDeleteSchoolDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
