/**
 * Standardized Response Model from API Calls
 *
 * @export
 * @class HttpResponseModel
 * @template T
 */
export class HttpResponseModel<T> {
  /**
   * Generic for response
   */
  data: T;

  /**
   * Creates an instance of HttpResponseModel.
   *
   * @param data
   * @memberof HttpResponseModel
   */
  constructor(data: T) {
    this.data = data;
  }
}
