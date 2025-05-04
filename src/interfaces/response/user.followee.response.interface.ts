import { IUserEntity } from "../entities/user.entity.interface";

export interface IUserFolloweeResponseInclude {
  isFollower: boolean;
  isFollowing: boolean;
}

export interface IRelationId {
  relationId: number;
}

export interface IUserFolloweeResponse extends IUserEntity, IRelationId {}
