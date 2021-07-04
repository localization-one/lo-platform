import {Component, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: 'ABSTRACT'
})
abstract class AbsBaseComponent implements OnDestroy {
  destroyed$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

export { AbsBaseComponent };
