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

import { CreateGradModel } from '../models/create-grad-model';
import { GradDetails } from '../models/grad-details';
import { UpdateGradModel } from '../models/update-grad-model';

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
): Observable<StrictHttpResponse<Array<GradDetails>>> {

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
        return r as StrictHttpResponse<Array<GradDetails>>;
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
): Observable<Array<GradDetails>> {

    return this.apiGradGetAllGradsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GradDetails>>) => r.body as Array<GradDetails>)
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
): Observable<StrictHttpResponse<Array<GradDetails>>> {

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
        return r as StrictHttpResponse<Array<GradDetails>>;
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
): Observable<Array<GradDetails>> {

    return this.apiGradGetAllGradsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GradDetails>>) => r.body as Array<GradDetails>)
    );
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
): Observable<StrictHttpResponse<GradDetails>> {

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
        return r as StrictHttpResponse<GradDetails>;
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
): Observable<GradDetails> {

    return this.apiGradIdGetGradByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GradDetails>) => r.body as GradDetails)
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
): Observable<StrictHttpResponse<GradDetails>> {

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
        return r as StrictHttpResponse<GradDetails>;
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
): Observable<GradDetails> {

    return this.apiGradIdGetGradByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GradDetails>) => r.body as GradDetails)
    );
  }

  /**
   * Path part for operation apiGradCreateGradPost
   */
  static readonly ApiGradCreateGradPostPath = '/api/Grad/CreateGrad';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGradCreateGradPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGradCreateGradPost$Response(params?: {
    context?: HttpContext
    body?: CreateGradModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GradService.ApiGradCreateGradPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGradCreateGradPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGradCreateGradPost(params?: {
    context?: HttpContext
    body?: CreateGradModel
  }
): Observable<void> {

    return this.apiGradCreateGradPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGradUpdateGradIdPatch
   */
  static readonly ApiGradUpdateGradIdPatchPath = '/api/Grad/UpdateGrad/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGradUpdateGradIdPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGradUpdateGradIdPatch$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateGradModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GradService.ApiGradUpdateGradIdPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `apiGradUpdateGradIdPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGradUpdateGradIdPatch(params: {
    id: string;
    context?: HttpContext
    body?: UpdateGradModel
  }
): Observable<void> {

    return this.apiGradUpdateGradIdPatch$Response(params).pipe(
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
