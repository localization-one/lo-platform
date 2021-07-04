import { Injectable } from '@angular/core';
import { BackendService, BaseApiService } from '@core/backend';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseApiService {
  constructor(backendService: BackendService) {
    super(backendService, 'users');
  }
}
