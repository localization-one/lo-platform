import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PageHeaderStore } from './page-header.store';
import { IPageHeaderState } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class PageHeaderQuery extends Query<IPageHeaderState> {
  constructor(protected store: PageHeaderStore) {
    super(store);
  }
}
