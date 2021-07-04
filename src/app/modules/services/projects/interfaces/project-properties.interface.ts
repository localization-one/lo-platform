import {BaseEntity} from "@base/entities";

interface IProjectProps extends BaseEntity {
  active: boolean;
  verified: boolean;
}

export { IProjectProps };
