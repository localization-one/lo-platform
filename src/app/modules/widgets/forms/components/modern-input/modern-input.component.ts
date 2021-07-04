import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@ngneat/reactive-forms';
import { AbsComponentWithControl } from '@base/abs';
import { takeUntil } from 'rxjs/operators';
import { guid, ID } from '@datorama/akita';

@Component({
  selector: 'app-modern-input',
  templateUrl: './modern-input.component.html',
  styleUrls: ['./modern-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ModernInputComponent),
    },
  ],
})
export class ModernInputComponent
  extends AbsComponentWithControl
  implements ControlValueAccessor, OnChanges
{
  id: ID = guid();

  control: FormGroup<{ value: string }>;

  @Input()
  initialValue!: string;

  @Input()
  label!: string;

  @Input()
  placeholder!: string;

  constructor(private readonly formBuilder: FormBuilder) {
    super();
    this.control = this.formBuilder.group({
      value: new FormControl(this.initialValue),
    });
    this.control.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => this.onChange(value.value));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.initialValue && changes.initialValue.firstChange) {
      this.control.patchValue({ value: changes.initialValue.currentValue });
    }
  }
}
