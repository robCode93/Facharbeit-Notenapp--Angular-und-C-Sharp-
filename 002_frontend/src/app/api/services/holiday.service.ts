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

import { HolidayDetails } from '../models/holiday-details';

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
): Observable<StrictHttpResponse<HolidayDetails>> {

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
        return r as StrictHttpResponse<HolidayDetails>;
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
): Observable<HolidayDetails> {

    return this.apiHolidayIdGetHolidayByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<HolidayDetails>) => r.body as HolidayDetails)
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
): Observable<StrictHttpResponse<HolidayDetails>> {

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
        return r as StrictHttpResponse<HolidayDetails>;
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
): Observable<HolidayDetails> {

    return this.apiHolidayIdGetHolidayByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<HolidayDetails>) => r.body as HolidayDetails)
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
): Observable<StrictHttpResponse<Array<HolidayDetails>>> {

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
        return r as StrictHttpResponse<Array<HolidayDetails>>;
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
): Observable<Array<HolidayDetails>> {

    return this.apiHolidayGetAllHolidaysGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HolidayDetails>>) => r.body as Array<HolidayDetails>)
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
): Observable<StrictHttpResponse<Array<HolidayDetails>>> {

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
        return r as StrictHttpResponse<Array<HolidayDetails>>;
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
): Observable<Array<HolidayDetails>> {

    return this.apiHolidayGetAllHolidaysGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HolidayDetails>>) => r.body as Array<HolidayDetails>)
    );
  }

  /**
   * Path part for operation apiHolidayGetHolidaysByFedStateGet
   */
  static readonly ApiHolidayGetHolidaysByFedStateGetPath = '/api/Holiday/GetHolidaysByFedState';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayGetHolidaysByFedStateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetHolidaysByFedStateGet$Plain$Response(params?: {
    fedState?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<HolidayDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayGetHolidaysByFedStateGetPath, 'get');
    if (params) {
      rb.query('fedState', params.fedState, {});
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
   * To access the full response (for headers, for example), `apiHolidayGetHolidaysByFedStateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetHolidaysByFedStateGet$Plain(params?: {
    fedState?: string;
    context?: HttpContext
  }
): Observable<Array<HolidayDetails>> {

    return this.apiHolidayGetHolidaysByFedStateGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HolidayDetails>>) => r.body as Array<HolidayDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayGetHolidaysByFedStateGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetHolidaysByFedStateGet$Json$Response(params?: {
    fedState?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<HolidayDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayGetHolidaysByFedStateGetPath, 'get');
    if (params) {
      rb.query('fedState', params.fedState, {});
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
   * To access the full response (for headers, for example), `apiHolidayGetHolidaysByFedStateGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetHolidaysByFedStateGet$Json(params?: {
    fedState?: string;
    context?: HttpContext
  }
): Observable<Array<HolidayDetails>> {

    return this.apiHolidayGetHolidaysByFedStateGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HolidayDetails>>) => r.body as Array<HolidayDetails>)
    );
  }

}
