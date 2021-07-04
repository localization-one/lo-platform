import { BaseEntity } from '@base/entities';

interface IUser extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
}


export { IUser };
