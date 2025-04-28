import { UserFolloweeStatusEnum } from "../../enums/follower.status.enum";
import { IEntityCreateDto } from "../../generi.types";
import { IUserFolloweeEntity } from "../entities/followers.entity.interface";

export type IUserFollowerCreateDtoExclude = "status";

export type IUserFollowerCreateDto = Omit<
  IEntityCreateDto<IUserFolloweeEntity>,
  "status"
> & {
  status?: UserFolloweeStatusEnum;
};
