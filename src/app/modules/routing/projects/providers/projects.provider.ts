import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { InjectionToken, Provider } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProject, ProjectsService } from '@services/projects';

const PROJECT_INFO: InjectionToken<Observable<IProject>> = new InjectionToken<
  Observable<IProject>
>('A stream with current project information');

const PROJECT_PROVIDERS: Provider[] = [
  {
    provide: PROJECT_INFO,
    deps: [ActivatedRoute, ProjectsService],
    useFactory: projectFactory,
  },
];

function projectFactory(
  { paramMap }: ActivatedRoute,
  projectsService: ProjectsService
): Observable<IProject> {
  return paramMap.pipe(
    switchMap((params: Params) => {
      const id = params.get('projectID');

      return projectsService.getById(id);
    })
  );
}

export { PROJECT_INFO, PROJECT_PROVIDERS, projectFactory };
