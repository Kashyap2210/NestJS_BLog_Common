import { IUserEntity } from "../entities/user.entity.interface";

export interface IUserFolloweeResponseInclude {
  isFollower: boolean;
  isFollowing: boolean;
}

export interface IUserFolloweeResponse extends IUserEntity {}
