import { IUserEntity } from '../entities/user.entity.interface';

export interface IUserLoginResponse {
  accessToken: string;
  user: IUserEntity;
}
