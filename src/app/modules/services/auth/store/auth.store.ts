import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { IAuthState } from '@services/auth/interfaces';
import { typeWrapper } from '@utils/types';

const createInitialState = (): IAuthState => {
  return {
    id: typeWrapper(undefined),
    email: typeWrapper(undefined),
    firstName: typeWrapper(undefined),
    lastName: typeWrapper(undefined),
    token: undefined,
  };
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })
export class AuthStore extends Store<IAuthState> {
  constructor() {
    super(createInitialState());
  }
}
