import {BaseEntity} from "@base/entities";

interface ITeam extends BaseEntity {
  name: string;
  description: string;
}

export { ITeam };
