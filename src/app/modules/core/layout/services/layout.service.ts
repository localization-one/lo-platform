import { Injectable } from '@angular/core';
import { AuthService } from '@services/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public isLogged$: Observable<boolean> = this.authService.isLogged$;

  public fullName$: Observable<string> = this.authService.fullName$;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['']).then();
  }
}
