import { IUserEntity } from "../entities/user.entity.interface";
import { IBlogResponse } from "./blog.response.interface";

export interface IUserProfileResponse {
  userDetail: IUserEntity;
  blogsOfUser: IBlogResponse[];
  followersCount: number,
  followingCount: number
}
