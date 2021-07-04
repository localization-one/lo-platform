export class BackendConfig {
  /**
   * Backend host, where all request would be directed
   *
   * @type string
   * @memberOf BackendConfig
   */
  apiUrl: string;

  /**
   * Creates an instance of HttpResponseModel.
   *
   * @param apiUrl
   * @memberof HttpResponseModel
   */
  constructor({ apiUrl }: BackendConfig) {
    this.apiUrl = apiUrl;
  }
}
