import { IUserEntity } from "./user.entity.interface";

export interface IUserLoginResponse{
    accessToken: string,
    user:IUserEntity
}