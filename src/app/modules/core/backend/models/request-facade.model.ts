import { RequestModel } from './request.model';
import { RequestType } from '../enum';

export class RequestFacadeModel<T = null> {
  /**
   * HTTP METHOD ( GET, POST, PUT, PATCH , DELETE )
   *
   * @type RequestType
   * @memberOf RequestFacadeModel
   */
  requestType: RequestType;

  /**
   * Request payload and configuration
   *
   * @type RequestModel
   * @memberOf RequestFacadeModel
   */
  request: RequestModel<T>;

  constructor({
    requestType,
    request,
  }: Required<Partial<RequestFacadeModel<T>>>) {
    this.requestType = requestType;
    this.request = request;
  }
}
