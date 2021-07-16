import { Injectable } from '@angular/core';
import {
  BackendService,
  BaseApiService,
  RequestFacadeModel,
  RequestModel,
  RequestType,
} from '@core/backend';
import { LoginDto } from '@services/auth/dtos';
import { AuthQuery, AuthStore } from './store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTES } from '@const';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseApiService {
  public isLogged$: Observable<boolean> = this.authQuery.isLogged$;

  public fullName$: Observable<string> = this.authQuery.fullName$;

  constructor(
    backendService: BackendService,
    private readonly authStore: AuthStore,
    private readonly authQuery: AuthQuery,
    private readonly router: Router
  ) {
    super(backendService, 'auth');
  }

  public login(loginDto: LoginDto): void {
    const request: RequestModel<LoginDto> = new RequestModel<LoginDto>({
      url: this.getFullUrl('login'),
      requestBody: loginDto,
    });
    const requestFacade: RequestFacadeModel<LoginDto> =
      new RequestFacadeModel<LoginDto>({
        requestType: RequestType.post,
        request,
      });
    this.send<any, LoginDto>(requestFacade).subscribe((response) => {
      this.authStore.update({ ...response });
      this.router.navigate([`/${ROUTES.platform}`]).then();
    });
  }

  public logout(): void {
    this.authStore.reset();
  }
}
