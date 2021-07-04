import { Injectable } from '@angular/core';
import {
  BackendService,
  BaseApiService,
  RequestFacadeModel,
  RequestModel,
  RequestType,
} from '@core/backend';
import { Observable, Subject } from 'rxjs';
import { IProject } from '@services/projects/interfaces';
import { ID } from '@datorama/akita';
import { CreateTeamDto, ITeam } from '@services/teams';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService extends BaseApiService {
  public reload$: Subject<null> = new Subject<null>();

  constructor(backendService: BackendService) {
    super(backendService, 'projects');
  }

  getAvailableProjects(): Observable<IProject[]> {
    const request: RequestModel<null> = new RequestModel<null>({
      url: this.getFullUrl(null),
      requestBody: null,
    });
    const requestFacade: RequestFacadeModel<null> =
      new RequestFacadeModel<null>({
        requestType: RequestType.get,
        request,
      });
    return this.send<IProject[], null>(requestFacade);
  }

  getById(id: ID): Observable<IProject> {
    const request: RequestModel<null> = new RequestModel<null>({
      url: this.getFullUrl(null),
      requestBody: null,
    }).withID(id);
    const requestFacade: RequestFacadeModel<null> =
      new RequestFacadeModel<null>({
        requestType: RequestType.get,
        request,
      });
    return this.send<IProject, null>(requestFacade);
  }

  createProjectTeam(id: ID, teamDto: CreateTeamDto): void {
    const request: RequestModel<CreateTeamDto> =
      new RequestModel<CreateTeamDto>({
        url: this.getFullUrl('teams'),
        requestBody: teamDto,
      }).withID(id);
    const requestFacade: RequestFacadeModel<CreateTeamDto> =
      new RequestFacadeModel<CreateTeamDto>({
        requestType: RequestType.post,
        request,
      });
    this.send<ITeam, CreateTeamDto>(requestFacade)
      .pipe(tap(() => this.reload$.next()))
      .subscribe();
  }
}
