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

import { SchoolYear } from '../models/school-year';
import { SubjectDetails } from '../models/subject-details';

@Injectable({
  providedIn: 'root',
})
export class SchoolYearService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSchoolYearIdGetSchoolYearByIdGet
   */
  static readonly ApiSchoolYearIdGetSchoolYearByIdGetPath = '/api/SchoolYear/{id}/GetSchoolYearById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearIdGetSchoolYearByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdGetSchoolYearByIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SchoolYear>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearIdGetSchoolYearByIdGetPath, 'get');
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
        return r as StrictHttpResponse<SchoolYear>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolYearIdGetSchoolYearByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdGetSchoolYearByIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SchoolYear> {

    return this.apiSchoolYearIdGetSchoolYearByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolYear>) => r.body as SchoolYear)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearIdGetSchoolYearByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdGetSchoolYearByIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SchoolYear>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearIdGetSchoolYearByIdGetPath, 'get');
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
        return r as StrictHttpResponse<SchoolYear>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolYearIdGetSchoolYearByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdGetSchoolYearByIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SchoolYear> {

    return this.apiSchoolYearIdGetSchoolYearByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolYear>) => r.body as SchoolYear)
    );
  }

  /**
   * Path part for operation apiSchoolYearGetAllSchoolYearsGet
   */
  static readonly ApiSchoolYearGetAllSchoolYearsGetPath = '/api/SchoolYear/GetAllSchoolYears';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearGetAllSchoolYearsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearGetAllSchoolYearsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SchoolYear>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearGetAllSchoolYearsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SchoolYear>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolYearGetAllSchoolYearsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearGetAllSchoolYearsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<SchoolYear>> {

    return this.apiSchoolYearGetAllSchoolYearsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolYear>>) => r.body as Array<SchoolYear>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearGetAllSchoolYearsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearGetAllSchoolYearsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SchoolYear>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearGetAllSchoolYearsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SchoolYear>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolYearGetAllSchoolYearsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearGetAllSchoolYearsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<SchoolYear>> {

    return this.apiSchoolYearGetAllSchoolYearsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolYear>>) => r.body as Array<SchoolYear>)
    );
  }

  /**
   * Path part for operation apiSchoolYearIdDeleteSchoolYearDelete
   */
  static readonly ApiSchoolYearIdDeleteSchoolYearDeletePath = '/api/SchoolYear/{id}/DeleteSchoolYear';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearIdDeleteSchoolYearDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdDeleteSchoolYearDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearIdDeleteSchoolYearDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiSchoolYearIdDeleteSchoolYearDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdDeleteSchoolYearDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiSchoolYearIdDeleteSchoolYearDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSchoolYearSaveSchoolYearPost
   */
  static readonly ApiSchoolYearSaveSchoolYearPostPath = '/api/SchoolYear/SaveSchoolYear';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearSaveSchoolYearPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolYearSaveSchoolYearPost$Response(params?: {
    context?: HttpContext
    body?: SchoolYear
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearSaveSchoolYearPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSchoolYearSaveSchoolYearPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolYearSaveSchoolYearPost(params?: {
    context?: HttpContext
    body?: SchoolYear
  }
): Observable<void> {

    return this.apiSchoolYearSaveSchoolYearPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPost
   */
  static readonly ApiSchoolYearYearIdAddSubjectToSchoolYearSubIdPostPath = '/api/SchoolYear/{yearId}/AddSubjectToSchoolYear/{subId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPost$Response(params: {
    yearId: string;
    subId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearYearIdAddSubjectToSchoolYearSubIdPostPath, 'post');
    if (params) {
      rb.path('yearId', params.yearId, {});
      rb.path('subId', params.subId, {});
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
   * To access the full response (for headers, for example), `apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPost(params: {
    yearId: string;
    subId: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSchoolYearIdGetSubjectsOfSchoolYearGet
   */
  static readonly ApiSchoolYearIdGetSubjectsOfSchoolYearGetPath = '/api/SchoolYear/{id}/GetSubjectsOfSchoolYear';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearIdGetSubjectsOfSchoolYearGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdGetSubjectsOfSchoolYearGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SubjectDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearIdGetSubjectsOfSchoolYearGetPath, 'get');
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
        return r as StrictHttpResponse<Array<SubjectDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolYearIdGetSubjectsOfSchoolYearGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdGetSubjectsOfSchoolYearGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<SubjectDetails>> {

    return this.apiSchoolYearIdGetSubjectsOfSchoolYearGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubjectDetails>>) => r.body as Array<SubjectDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearIdGetSubjectsOfSchoolYearGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdGetSubjectsOfSchoolYearGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SubjectDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearIdGetSubjectsOfSchoolYearGetPath, 'get');
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
        return r as StrictHttpResponse<Array<SubjectDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolYearIdGetSubjectsOfSchoolYearGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearIdGetSubjectsOfSchoolYearGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<SubjectDetails>> {

    return this.apiSchoolYearIdGetSubjectsOfSchoolYearGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubjectDetails>>) => r.body as Array<SubjectDetails>)
    );
  }

}
