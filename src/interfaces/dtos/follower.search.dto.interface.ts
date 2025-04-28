import { IEntityFilterData } from "../../generi.types";
import { IUserFolloweeEntity } from "../entities/followers.entity.interface";

export interface IUserFollowerSearchDto
  extends IEntityFilterData<IUserFolloweeEntity> {}
