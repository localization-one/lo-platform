import { Observable } from 'rxjs';
import { BackendService } from '../services';
import { RequestFacadeModel } from '../models';

/**
 * Base Api Service with common used methods, created to DRY
 *
 * @export
 * @class BaseApiService
 */
export abstract class BaseApiService {
  /**
   * Used to decrease amount of repeatable URL typings
   *
   * @private
   * @type {string}
   * @memberof BaseApiService
   */
  private readonly apiExtension: string;

  /**
   * Creates an instance of BaseApiService.
   *
   * @param backendService
   * @param apiExtension - REST endpoint
   * @memberof BaseApiService
   */
  protected constructor(
    protected readonly backendService: BackendService,
    apiExtension: string
  ) {
    this.apiExtension = apiExtension;
  }

  /**
   * Since extension is private here's getter for it
   *
   * @return string
   * @memberof BaseApiService
   */
  public extension(): string {
    return this.apiExtension;
  }

  /**
   * Combines apiExtension
   *
   * @param url
   * @return
   * @memberof BaseApiService
   */
  protected getFullUrl(url: string | null = null): string {
    return url ? `${this.apiExtension}/${url}/` : `${this.apiExtension}/`;
  }

  /**
   * Send Request with necessary types
   *
   * @template T-Return Type
   * @template R-DTO Type
   * @param requestFacade
   * @return
   * @memberof BaseApiService
   */
  protected send<T, R = null>(
    requestFacade: RequestFacadeModel<R>
  ): Observable<T> {
    return this.backendService.send<T, R>(requestFacade);
  }
}
