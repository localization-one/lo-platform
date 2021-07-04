import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LayoutService } from '@core/layout/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'lo-layout-wrapper',
  templateUrl: './layout-wrapper.component.html',
  styleUrls: ['./layout-wrapper.component.scss'],
})
export class LayoutWrapperComponent {
  public isCollapsed = true;

  public isLogged$: Observable<boolean> = this.layoutService.isLogged$;

  public fullName$: Observable<string> = this.layoutService.fullName$;

  constructor(
    private readonly layoutService: LayoutService,
    private readonly cd: ChangeDetectorRef
  ) {}

  handleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.cd.detectChanges();
  }
}
