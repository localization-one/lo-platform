import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { CreateTeamDto } from '@services/teams';
import { Validators } from '@angular/forms';
import { ProjectsService } from '@services/projects';
import { ID } from '@datorama/akita';

@Component({
  selector: 'lo-drawer-team-creation',
  templateUrl: './drawer-team-creation.component.html',
  styleUrls: ['./drawer-team-creation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerTeamCreationComponent {
  @Input()
  projectId!: ID | null;

  public teamGroup: FormGroup<CreateTeamDto>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly projectsService: ProjectsService
  ) {
    this.teamGroup = this.formBuilder.group<CreateTeamDto>({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  handleSubmit(): void {
    this.projectsService
      .createProjectTeam(this.projectId as ID, this.teamGroup.value);
  }
}
