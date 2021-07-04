import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { IPageHeaderState } from '../interfaces';

const createInitialState = (): IPageHeaderState => {
  return {
    actions: [],
  };
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'page-header', resettable: true })
export class PageHeaderStore extends Store<IPageHeaderState> {
  constructor() {
    super(createInitialState());
  }
}
