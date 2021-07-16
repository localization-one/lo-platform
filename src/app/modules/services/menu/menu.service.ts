import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenuItem } from '@services/menu/interfaces';
import { MENU_ITEMS } from '@services/menu/const';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuItemsBeh$: BehaviorSubject<IMenuItem[]> = new BehaviorSubject<
    IMenuItem[]
  >(MENU_ITEMS);

  public menuItems$: Observable<IMenuItem[]> =
    this.menuItemsBeh$.asObservable();

  constructor() {}
}
