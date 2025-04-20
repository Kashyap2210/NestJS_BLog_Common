import { IUserEntity } from "../entities/user.entity.interface";
import { IBlogResponse } from "./blog.response.interface";

export interface IUserProfileResponse {
  userDetail: IUserEntity;
  blogsOfUsers: IBlogResponse[];
}
