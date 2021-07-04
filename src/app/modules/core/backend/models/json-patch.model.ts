import { JsonPatchType } from '../types/json-patch.type';

/**
 * JsonPatch RequestBody builder
 *
 * @export
 * @class JsonPatchModel
 * @template T
 * @template R
 */
export class JsonPatchModel<T, R> {
  /**
   * Operation
   *
   * @type {JsonPatchType}
   */
  op: JsonPatchType;

  /**
   * Operation Path
   */
  path: string;

  /**
   * Operation Value
   */
  value: R;

  constructor({ op, path, value }: JsonPatchModel<T, R>) {
    this.op = op;
    this.path = path;
    this.value = value;
  }

  /**
   * Building JsonPath syntax according to Generic
   *
   * @template T
   * @param path
   * @memberof JsonPatchModel
   */
  public buildPatch(path: keyof T): this {
    this.path = '/' + path;
    return this;
  }
}
