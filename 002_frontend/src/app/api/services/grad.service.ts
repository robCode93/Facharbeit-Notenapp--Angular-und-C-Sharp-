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

import { Grad } from '../models/grad';

@Injectable({
  providedIn: 'root',
})
export class GradService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGradIdGetGradByIdGet
   */
  static readonly ApiGradIdGetGradByIdGetPath = '/api/Grad/{id}/GetGradById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGradIdGetGradByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradIdGetGradByIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Grad>> {

    const rb = new RequestBuilder(this.rootUrl, GradService.ApiGradIdGetGradByIdGetPath, 'get');
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
        return r as StrictHttpResponse<Grad>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGradIdGetGradByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradIdGetGradByIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Grad> {

    return this.apiGradIdGetGradByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Grad>) => r.body as Grad)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGradIdGetGradByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradIdGetGradByIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Grad>> {

    const rb = new RequestBuilder(this.rootUrl, GradService.ApiGradIdGetGradByIdGetPath, 'get');
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
        return r as StrictHttpResponse<Grad>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGradIdGetGradByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradIdGetGradByIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Grad> {

    return this.apiGradIdGetGradByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Grad>) => r.body as Grad)
    );
  }

  /**
   * Path part for operation apiGradGetAllGradsGet
   */
  static readonly ApiGradGetAllGradsGetPath = '/api/Grad/GetAllGrads';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGradGetAllGradsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradGetAllGradsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Grad>>> {

    const rb = new RequestBuilder(this.rootUrl, GradService.ApiGradGetAllGradsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Grad>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGradGetAllGradsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradGetAllGradsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Grad>> {

    return this.apiGradGetAllGradsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Grad>>) => r.body as Array<Grad>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGradGetAllGradsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradGetAllGradsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Grad>>> {

    const rb = new RequestBuilder(this.rootUrl, GradService.ApiGradGetAllGradsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Grad>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGradGetAllGradsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradGetAllGradsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Grad>> {

    return this.apiGradGetAllGradsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Grad>>) => r.body as Array<Grad>)
    );
  }

  /**
   * Path part for operation apiGradSaveGradPost
   */
  static readonly ApiGradSaveGradPostPath = '/api/Grad/SaveGrad';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGradSaveGradPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGradSaveGradPost$Response(params?: {
    context?: HttpContext
    body?: Grad
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GradService.ApiGradSaveGradPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGradSaveGradPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGradSaveGradPost(params?: {
    context?: HttpContext
    body?: Grad
  }
): Observable<void> {

    return this.apiGradSaveGradPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGradIdDeleteGradDelete
   */
  static readonly ApiGradIdDeleteGradDeletePath = '/api/Grad/{id}/DeleteGrad';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGradIdDeleteGradDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradIdDeleteGradDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GradService.ApiGradIdDeleteGradDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiGradIdDeleteGradDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGradIdDeleteGradDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiGradIdDeleteGradDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
