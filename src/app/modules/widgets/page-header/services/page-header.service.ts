import { Injectable } from '@angular/core';
import { AuthService } from '@services/auth';
import { Observable } from 'rxjs';
import { PageHeaderQuery, PageHeaderStore } from '../store';

@Injectable({
  providedIn: 'root',
})
export class PageHeaderService {
  public fullName$: Observable<string> = this.authService.fullName$;

  constructor(
    private readonly headerStore: PageHeaderStore,
    private readonly headerQuery: PageHeaderQuery,
    private readonly authService: AuthService
  ) {}
}
