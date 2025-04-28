import { IEntityUpdateDto } from "../../generi.types";
import { IUserFolloweeEntity } from "../entities/followers.entity.interface";
export interface IUserFollowerUpdateDto extends IEntityUpdateDto<IUserFolloweeEntity> {
}
