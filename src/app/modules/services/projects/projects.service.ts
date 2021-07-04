import { Injectable } from '@angular/core';
import {
  BackendService,
  BaseApiService,
  RequestFacadeModel,
  RequestModel,
  RequestType,
} from '@core/backend';
import { Observable } from 'rxjs';
import { IProject } from '@services/projects/interfaces';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService extends BaseApiService {
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
}
