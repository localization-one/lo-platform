import { Component } from '@angular/core';
import { IProject, ProjectsService } from '@services/projects';
import { Observable } from 'rxjs';

@Component({
  selector: 'lo-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage {
  public projects$: Observable<IProject[]>;

  constructor(private readonly projectsService: ProjectsService) {
    this.projects$ = this.projectsService.getAvailableProjects();
  }
}
