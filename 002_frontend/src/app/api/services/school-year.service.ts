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

import { CreateSchoolYearModel } from '../models/create-school-year-model';
import { SchoolYearDetails } from '../models/school-year-details';
import { SubjectDetails } from '../models/subject-details';
import { UpdateSchoolYearModel } from '../models/update-school-year-model';

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
): Observable<StrictHttpResponse<Array<SchoolYearDetails>>> {

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
        return r as StrictHttpResponse<Array<SchoolYearDetails>>;
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
): Observable<Array<SchoolYearDetails>> {

    return this.apiSchoolYearGetAllSchoolYearsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolYearDetails>>) => r.body as Array<SchoolYearDetails>)
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
): Observable<StrictHttpResponse<Array<SchoolYearDetails>>> {

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
        return r as StrictHttpResponse<Array<SchoolYearDetails>>;
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
): Observable<Array<SchoolYearDetails>> {

    return this.apiSchoolYearGetAllSchoolYearsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolYearDetails>>) => r.body as Array<SchoolYearDetails>)
    );
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
): Observable<StrictHttpResponse<SchoolYearDetails>> {

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
        return r as StrictHttpResponse<SchoolYearDetails>;
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
): Observable<SchoolYearDetails> {

    return this.apiSchoolYearIdGetSchoolYearByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolYearDetails>) => r.body as SchoolYearDetails)
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
): Observable<StrictHttpResponse<SchoolYearDetails>> {

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
        return r as StrictHttpResponse<SchoolYearDetails>;
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
): Observable<SchoolYearDetails> {

    return this.apiSchoolYearIdGetSchoolYearByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolYearDetails>) => r.body as SchoolYearDetails)
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

  /**
   * Path part for operation apiSchoolYearCreateSchoolYearPost
   */
  static readonly ApiSchoolYearCreateSchoolYearPostPath = '/api/SchoolYear/CreateSchoolYear';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearCreateSchoolYearPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolYearCreateSchoolYearPost$Response(params?: {
    context?: HttpContext
    body?: CreateSchoolYearModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearCreateSchoolYearPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSchoolYearCreateSchoolYearPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolYearCreateSchoolYearPost(params?: {
    context?: HttpContext
    body?: CreateSchoolYearModel
  }
): Observable<void> {

    return this.apiSchoolYearCreateSchoolYearPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSchoolYearUpdateSchoolYearIdPatch
   */
  static readonly ApiSchoolYearUpdateSchoolYearIdPatchPath = '/api/SchoolYear/UpdateSchoolYear/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearUpdateSchoolYearIdPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolYearUpdateSchoolYearIdPatch$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSchoolYearModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearUpdateSchoolYearIdPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `apiSchoolYearUpdateSchoolYearIdPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolYearUpdateSchoolYearIdPatch(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSchoolYearModel
  }
): Observable<void> {

    return this.apiSchoolYearUpdateSchoolYearIdPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPatch
   */
  static readonly ApiSchoolYearYearIdAddSubjectToSchoolYearSubIdPatchPath = '/api/SchoolYear/{yearId}/AddSubjectToSchoolYear/{subId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPatch()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPatch$Response(params: {
    yearId: string;
    subId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolYearService.ApiSchoolYearYearIdAddSubjectToSchoolYearSubIdPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPatch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPatch(params: {
    yearId: string;
    subId: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiSchoolYearYearIdAddSubjectToSchoolYearSubIdPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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

}
