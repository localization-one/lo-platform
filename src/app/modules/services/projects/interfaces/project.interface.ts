import { BaseEntity } from '@base/entities';
import { IProjectProps } from '@services/projects';
import { ITeam } from '@services/teams';

interface IProject extends BaseEntity {
  name: string;
  origin: string;
  description: string;
  props: IProjectProps;
  teams: ITeam[];
}

export { IProject };
