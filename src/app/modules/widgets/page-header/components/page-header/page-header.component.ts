import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  public fullName$: Observable<string> = this.headerService.fullName$;

  constructor(private readonly headerService: PageHeaderService) {}

  ngOnInit(): void {}
}
