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

import { CreateSubjectModel } from '../models/create-subject-model';
import { GradDetails } from '../models/grad-details';
import { SubjectDetails } from '../models/subject-details';
import { UpdateSubjectModel } from '../models/update-subject-model';

@Injectable({
  providedIn: 'root',
})
export class SubjectService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSubjectGetAllSubjectsGet
   */
  static readonly ApiSubjectGetAllSubjectsGetPath = '/api/Subject/GetAllSubjects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectGetAllSubjectsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectGetAllSubjectsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SubjectDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectGetAllSubjectsGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiSubjectGetAllSubjectsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectGetAllSubjectsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<SubjectDetails>> {

    return this.apiSubjectGetAllSubjectsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubjectDetails>>) => r.body as Array<SubjectDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectGetAllSubjectsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectGetAllSubjectsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SubjectDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectGetAllSubjectsGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiSubjectGetAllSubjectsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectGetAllSubjectsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<SubjectDetails>> {

    return this.apiSubjectGetAllSubjectsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubjectDetails>>) => r.body as Array<SubjectDetails>)
    );
  }

  /**
   * Path part for operation apiSubjectIdGetSubjectByIdGet
   */
  static readonly ApiSubjectIdGetSubjectByIdGetPath = '/api/Subject/{id}/GetSubjectById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectIdGetSubjectByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdGetSubjectByIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SubjectDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectIdGetSubjectByIdGetPath, 'get');
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
        return r as StrictHttpResponse<SubjectDetails>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubjectIdGetSubjectByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdGetSubjectByIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SubjectDetails> {

    return this.apiSubjectIdGetSubjectByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SubjectDetails>) => r.body as SubjectDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectIdGetSubjectByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdGetSubjectByIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SubjectDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectIdGetSubjectByIdGetPath, 'get');
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
        return r as StrictHttpResponse<SubjectDetails>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubjectIdGetSubjectByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdGetSubjectByIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SubjectDetails> {

    return this.apiSubjectIdGetSubjectByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SubjectDetails>) => r.body as SubjectDetails)
    );
  }

  /**
   * Path part for operation apiSubjectIdGetGradsOfSubjectGet
   */
  static readonly ApiSubjectIdGetGradsOfSubjectGetPath = '/api/Subject/{id}/GetGradsOfSubject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectIdGetGradsOfSubjectGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdGetGradsOfSubjectGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GradDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectIdGetGradsOfSubjectGetPath, 'get');
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
        return r as StrictHttpResponse<Array<GradDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubjectIdGetGradsOfSubjectGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdGetGradsOfSubjectGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<GradDetails>> {

    return this.apiSubjectIdGetGradsOfSubjectGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GradDetails>>) => r.body as Array<GradDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectIdGetGradsOfSubjectGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdGetGradsOfSubjectGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GradDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectIdGetGradsOfSubjectGetPath, 'get');
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
        return r as StrictHttpResponse<Array<GradDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubjectIdGetGradsOfSubjectGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdGetGradsOfSubjectGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<GradDetails>> {

    return this.apiSubjectIdGetGradsOfSubjectGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GradDetails>>) => r.body as Array<GradDetails>)
    );
  }

  /**
   * Path part for operation apiSubjectCreateSubjectPost
   */
  static readonly ApiSubjectCreateSubjectPostPath = '/api/Subject/CreateSubject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectCreateSubjectPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubjectCreateSubjectPost$Response(params?: {
    context?: HttpContext
    body?: CreateSubjectModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectCreateSubjectPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSubjectCreateSubjectPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubjectCreateSubjectPost(params?: {
    context?: HttpContext
    body?: CreateSubjectModel
  }
): Observable<void> {

    return this.apiSubjectCreateSubjectPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSubjectUpdateSubjectIdPatch
   */
  static readonly ApiSubjectUpdateSubjectIdPatchPath = '/api/Subject/UpdateSubject/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectUpdateSubjectIdPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubjectUpdateSubjectIdPatch$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSubjectModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectUpdateSubjectIdPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `apiSubjectUpdateSubjectIdPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubjectUpdateSubjectIdPatch(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSubjectModel
  }
): Observable<void> {

    return this.apiSubjectUpdateSubjectIdPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSubjectSubIdAddGradToSubjectGradIdPatch
   */
  static readonly ApiSubjectSubIdAddGradToSubjectGradIdPatchPath = '/api/Subject/{subId}/AddGradToSubject/{gradId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectSubIdAddGradToSubjectGradIdPatch()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectSubIdAddGradToSubjectGradIdPatch$Response(params: {
    subId: string;
    gradId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectSubIdAddGradToSubjectGradIdPatchPath, 'patch');
    if (params) {
      rb.path('subId', params.subId, {});
      rb.path('gradId', params.gradId, {});
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
   * To access the full response (for headers, for example), `apiSubjectSubIdAddGradToSubjectGradIdPatch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectSubIdAddGradToSubjectGradIdPatch(params: {
    subId: string;
    gradId: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiSubjectSubIdAddGradToSubjectGradIdPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSubjectIdDeleteSubjectDelete
   */
  static readonly ApiSubjectIdDeleteSubjectDeletePath = '/api/Subject/{id}/DeleteSubject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubjectIdDeleteSubjectDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdDeleteSubjectDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.ApiSubjectIdDeleteSubjectDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiSubjectIdDeleteSubjectDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubjectIdDeleteSubjectDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiSubjectIdDeleteSubjectDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
