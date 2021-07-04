import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpResponseModel, RequestFacadeModel, RequestModel } from '../models';
import { BackendConfig } from '../config';
import { RequestType } from '../enum';
import { ecCreateLogger } from '@utils/logger';

const log = ecCreateLogger('core:backend');

/**
 * Our awesome backend service, to provide the same syntax around all requests, with pre-settled error-handling and success notifications
 *
 * @export
 * @class BackendService
 */
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  logger = { log };

  /**
   * Authorization token
   *
   * @type BehaviorSubject<string | null>
   * @memberOf BackendService
   */
  public $token: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  /**
   * In case u need some specific headers, that will be appended to every request, just update this values
   *
   * @type BehaviorSubject<{ [key: string]: string } | null>
   * @memberOf BackendService
   */
  private $headers: BehaviorSubject<{ [key: string]: string } | null> =
    new BehaviorSubject<{ [key: string]: string } | null>(null);

  private readonly apiUrl: string;

  /**
   * Creates an instance of BackendService.
   *
   * @param config
   * @param http
   * @param router
   * @memberof BackendService
   */
  constructor(
    @Optional() config: BackendConfig,
    private http: HttpClient,
    private readonly router: Router
  ) {
    this.logger.log(`Backend Service options: ${JSON.stringify(config)}`);
    this.apiUrl = config.apiUrl;
  }

  /**
   * Add Header to BehaviourSubject, or create the new one
   *
   * @memberof BackendService
   * @param header
   */
  setHeader(header: { [key: string]: string }): void {
    const currentHeaders = this.$headers.getValue();
    if (currentHeaders) {
      this.$headers.next({ ...currentHeaders, ...header });
    } else {
      this.$headers.next(header);
    }
  }

  /**
   * Facade around all send api request(according to requestType enum)
   *
   * @template T
   * @template R
   * @param facade
   * @return
   * @memberof BackendService
   */
  send = <T, R = null>(facade: RequestFacadeModel<R>): Observable<T> => {
    facade.request = this.setHeaders<R>(facade.request);
    switch (facade.requestType) {
      case RequestType.get:
        return this.get<T>(facade.request as unknown as RequestModel);
      case RequestType.post:
        return this.post<T, R>(facade.request);
      case RequestType.patch:
        return this.patch<T, R>(facade.request);
      case RequestType.put:
        return this.put<T, R>(facade.request);
      case RequestType.delete:
        return this.delete<T>(facade.request as unknown as RequestModel);
      default:
        return this.get<T>(facade.request as unknown as RequestModel);
    }
  };

  /**
   * Proceed full request with standardized error-handling and success notifications
   *
   * @private
   * @template T
   * @param request
   * @param data
   * @return
   * @memberof BackendService
   */
  private proceedFullRequest<T>(
    request: Observable<HttpResponseModel<T>>,
    data: Pick<RequestModel, 'successMessage' | 'shouldIndicateLoader'>
  ): Observable<T> {
    return request.pipe(
      map((response: HttpResponseModel<T>) => {
        if (data.successMessage) {
        }
        if (response?.data) {
          return response.data;
        }
        return response as unknown as T;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Error-handler
   *
   * @private
   * @memberof BackendService
   */
  private handleError = (error: HttpErrorResponse) => {
    if (error.status === 403) {
      this.router.navigate(['custom-pages/error']);
    }
    if (error.status === 401) {
      this.router.navigate(['custom-pages/logout']);
    }
    return throwError(error);
  };

  /**
   * Helper for getting success message
   *
   * @private
   * @param request
   * @return
   * @memberof BackendService
   */
  private getSuccessMessage<T>(
    request: RequestModel<T>
  ): Pick<RequestModel, 'successMessage' | 'shouldIndicateLoader'> {
    return {
      successMessage: request.successMessage,
      shouldIndicateLoader: request.shouldIndicateLoader,
    };
  }

  /**
   * Combines url sent from services with apiHost
   *
   * @private
   * @template R
   * @param request
   * @return
   * @memberof BackendService
   */
  private getFullUrl<R>(request: RequestModel<R>): string {
    return request.customUrl
      ? `${request.customUrl}${request.url}`
      : request.version ? `${this.apiUrl}${request.version}/${request.url}` : `${this.apiUrl}${request.url}`;
  }

  /**
   * GET method (called from send() method)
   *
   * @private
   * @template T
   * @param request
   * @return
   * @memberof BackendService
   */
  private get<T>(request: RequestModel): Observable<T> {
    this.logger.log(`Processing GET request with url: ${request.url}`);
    return this.proceedFullRequest<T>(
      this.http.get<HttpResponseModel<T>>(
        this.getFullUrl<null>(request),
        request.options
      ),
      this.getSuccessMessage<null>(request)
    );
  }

  /**
   * POST method (called from send() method)
   *
   * @private
   * @template T
   * @template R
   * @param request
   * @return
   * @memberof BackendService
   */
  private post<T, R>(request: RequestModel<R>): Observable<T> {
    this.logger.log(`Processing POST request with url: ${request.url}`);
    return this.proceedFullRequest<T>(
      this.http.post<HttpResponseModel<T>>(
        this.getFullUrl<R>(request),
        request.requestBody,
        request.options
      ),
      this.getSuccessMessage<R>(request)
    );
  }

  /**
   * PUT method (called from send() method)
   *
   * @private
   * @template T
   * @template R
   * @param request
   * @return
   * @memberof BackendService
   */
  private put<T, R>(request: RequestModel<R>): Observable<T> {
    this.logger.log(`Processing PUT request with url: ${request.url}`);
    return this.proceedFullRequest<T>(
      this.http.put<HttpResponseModel<T>>(
        this.getFullUrl<R>(request),
        request.requestBody,
        request.options
      ),
      this.getSuccessMessage<R>(request)
    );
  }

  /**
   * PATCH method (called from send() method)
   *
   * @private
   * @template T
   * @template R
   * @param request
   * @return
   * @memberof BackendService
   */
  private patch<T, R>(request: RequestModel<R>): Observable<T> {
    this.logger.log(`Processing PATCH request with url: ${request.url}`);
    return this.proceedFullRequest<T>(
      this.http.patch<HttpResponseModel<T>>(
        this.getFullUrl<R>(request),
        request.requestBody,
        request.options
      ),
      this.getSuccessMessage<R>(request)
    );
  }

  /**
   * DELETE method (called from send() method)
   *
   * @private
   * @template T
   * @param request
   * @return
   * @memberof BackendService
   */
  private delete<T>(request: RequestModel): Observable<T> {
    this.logger.log(`Processing DELETE request with url: ${request.url}`);
    return this.proceedFullRequest<T>(
      this.http.delete<HttpResponseModel<T>>(
        this.getFullUrl<null>(request),
        request.options
      ),
      this.getSuccessMessage<null>(request)
    );
  }

  /**
   * Function that modifies existing request to append with headers that come from BehaviourSubject
   *
   * @private
   * @template R
   * @param request
   * @return
   * @memberof BackendService
   */
  private setHeaders<R>(request: RequestModel<R>): RequestModel<R> {
    const headers = this.$headers.getValue();
    if (headers) {
      Object.keys(headers).forEach((h) => {
        if (headers[h]) {
          request.addHeader(h, headers[h]);
        }
      });
    }
    return request;
  }
}
