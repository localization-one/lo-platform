import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthStore } from './auth.store';
import { IAuthState } from '@services/auth/interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<IAuthState> {
  public isLogged$: Observable<boolean> = this.select(
    (state: IAuthState) => !!state.id
  );

  public fullName$: Observable<string> = this.select((state: IAuthState) =>
    state.id ? `${state.firstName} ${state.lastName}` : 'Guest User'
  );

  constructor(protected store: AuthStore) {
    super(store);
  }
}
