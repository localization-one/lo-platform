import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '@services/projects';
import { PROJECT_INFO, PROJECT_PROVIDERS } from '../../providers';
import { FormBuilder, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { AbsBaseComponent } from '@base/abs';
import { map, takeUntil } from 'rxjs/operators';
import { ID } from '@datorama/akita';

type ProjectDTO = Pick<IProject, 'name' | 'origin'>;

@Component({
  selector: 'lo-project-detailed',
  templateUrl: './project-detailed.component.html',
  styleUrls: ['./project-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PROJECT_PROVIDERS],
})
export class ProjectDetailedComponent extends AbsBaseComponent {
  projectData: FormGroup<ProjectDTO> = this.formBuilder.group({
    name: new FormControl(''),
    origin: new FormControl(''),
  });

  projectId$: Observable<ID> = this.project$.pipe(
    map((project: IProject) => project.id)
  );

  constructor(
    @Inject(PROJECT_INFO) readonly project$: Observable<IProject>,
    private readonly formBuilder: FormBuilder
  ) {
    super();
    this.projectData.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((values) => console.log(values));
  }

  visible = false;
  childrenVisible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  openChildren(): void {
    this.childrenVisible = true;
  }

  closeChildren(): void {
    this.childrenVisible = false;
  }
}
