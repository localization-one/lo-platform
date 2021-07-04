import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'lo-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHeaderComponent {
  @Input()
  isCollapsed!: boolean;

  @Input()
  fullName!: string | null;

  @Output()
  collapsed$: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Output()
  logout$: EventEmitter<unknown> = new EventEmitter<unknown>();
}
