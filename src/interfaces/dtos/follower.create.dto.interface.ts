import { IEntityCreateDto } from "../../generi.types";
import { IUserFolloweeEntity } from "../entities/followers.entity.interface";

export interface IUserFollowerCreateDto
  extends IEntityCreateDto<IUserFolloweeEntity> {}
