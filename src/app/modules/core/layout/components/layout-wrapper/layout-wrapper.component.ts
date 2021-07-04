import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@core/layout/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-wrapper',
  templateUrl: './layout-wrapper.component.html',
  styleUrls: ['./layout-wrapper.component.scss'],
})
export class LayoutWrapperComponent implements OnInit {
  public isLogged$: Observable<boolean> = this.layoutService.isLogged$;

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {}
}
