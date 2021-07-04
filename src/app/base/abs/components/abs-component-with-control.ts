/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {AbsBaseComponent} from './abs-base-component';

abstract class AbsComponentWithControl extends AbsBaseComponent {
  writeValue(value: any): void {}

  onChange: any = () => {};

  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: never): void {
    this.onTouched = fn;
  }
}

export { AbsComponentWithControl };
