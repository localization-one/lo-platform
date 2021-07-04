import { RequestOptionsModel } from './request-options.model';
import { ApiVersion } from '../types/api-version.type';
import {ID} from "@datorama/akita";

export class RequestModel<T = null> {
  version?: ApiVersion;

  url: string | undefined;

  requestBody?: T;

  options?: RequestOptionsModel;

  customUrl?: string;

  successMessage?: string;

  shouldIndicateLoader = true;

  constructor({
    url,
    requestBody,
    options,
    customUrl,
    successMessage,
    shouldIndicateLoader,
    version,
  }: Partial<RequestModel<T>>) {
    this.url = url;
    this.requestBody = requestBody;
    this.options = options;
    this.customUrl = customUrl;
    this.successMessage = successMessage;
    this.shouldIndicateLoader = shouldIndicateLoader ?? true;
    this.version = version ?? undefined;
  }

  withCustomUrl(url: string): this {
    this.customUrl = url;
    return this;
  }

  withID(id: ID): this {
    this.url += `${id}/`;
    return this;
  }

  withAdditionalUrl(url: string): this {
    this.url += '/' + url;
    return this;
  }

  withQuery<TYPE>(object: TYPE): this {
    let url = '?';
    Object.keys(object).map((key: string, index: number) => {
      const value = (object as never)[key];
      if (index !== 0 && value !== undefined && value !== null) {
        url += '&';
      }
      if (value !== undefined && value !== null) {
        url += `${key}=${value}`;
      }
    });
    this.url += url;
    return this;
  }

  addHeader(key: string, value: string): this {
    if (this.options && this.options.headers) {
      this.options.headers = this.options?.headers.append(key, value);
    } else {
      this.createOptions();
      if (this.options) {
        this.options.headers = this.options?.headers?.append(key, value);
      }
    }
    return this;
  }

  createOptions(): this {
    if (!this.options) {
      this.options = new RequestOptionsModel();
    }
    return this;
  }

  isBLOB(): this {
    this.createOptions();
    if (this.options) {
      this.options.responseType = 'blob' as 'json';
    }
    return this;
  }
}
