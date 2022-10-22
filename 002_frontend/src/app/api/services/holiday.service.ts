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

import { Holiday } from '../models/holiday';

@Injectable({
  providedIn: 'root',
})
export class HolidayService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiHolidayIdGetHolidayByIdGet
   */
  static readonly ApiHolidayIdGetHolidayByIdGetPath = '/api/Holiday/{id}/GetHolidayById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayIdGetHolidayByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayIdGetHolidayByIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Holiday>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayIdGetHolidayByIdGetPath, 'get');
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
        return r as StrictHttpResponse<Holiday>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHolidayIdGetHolidayByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayIdGetHolidayByIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Holiday> {

    return this.apiHolidayIdGetHolidayByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Holiday>) => r.body as Holiday)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayIdGetHolidayByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayIdGetHolidayByIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Holiday>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayIdGetHolidayByIdGetPath, 'get');
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
        return r as StrictHttpResponse<Holiday>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHolidayIdGetHolidayByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayIdGetHolidayByIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Holiday> {

    return this.apiHolidayIdGetHolidayByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Holiday>) => r.body as Holiday)
    );
  }

  /**
   * Path part for operation apiHolidayGetAllHolidaysGet
   */
  static readonly ApiHolidayGetAllHolidaysGetPath = '/api/Holiday/GetAllHolidays';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayGetAllHolidaysGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetAllHolidaysGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Holiday>>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayGetAllHolidaysGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Holiday>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHolidayGetAllHolidaysGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetAllHolidaysGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Holiday>> {

    return this.apiHolidayGetAllHolidaysGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Holiday>>) => r.body as Array<Holiday>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayGetAllHolidaysGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetAllHolidaysGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Holiday>>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayGetAllHolidaysGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Holiday>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHolidayGetAllHolidaysGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetAllHolidaysGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Holiday>> {

    return this.apiHolidayGetAllHolidaysGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Holiday>>) => r.body as Array<Holiday>)
    );
  }

  /**
   * Path part for operation apiHolidayIdDeleteHolidayDelete
   */
  static readonly ApiHolidayIdDeleteHolidayDeletePath = '/api/Holiday/{id}/DeleteHoliday';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayIdDeleteHolidayDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayIdDeleteHolidayDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayIdDeleteHolidayDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiHolidayIdDeleteHolidayDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayIdDeleteHolidayDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiHolidayIdDeleteHolidayDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiHolidaySaveHolidaysPost
   */
  static readonly ApiHolidaySaveHolidaysPostPath = '/api/Holiday/SaveHolidays';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidaySaveHolidaysPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHolidaySaveHolidaysPost$Response(params?: {
    context?: HttpContext
    body?: Holiday
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidaySaveHolidaysPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiHolidaySaveHolidaysPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHolidaySaveHolidaysPost(params?: {
    context?: HttpContext
    body?: Holiday
  }
): Observable<void> {

    return this.apiHolidaySaveHolidaysPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
