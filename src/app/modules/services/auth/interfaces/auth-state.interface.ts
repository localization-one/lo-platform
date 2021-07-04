import { IUser } from '@services/users';

interface IAuthState extends Omit<IUser, 'createdAt' | 'updatedAt'> {
  token?: string;
}

export { IAuthState };
