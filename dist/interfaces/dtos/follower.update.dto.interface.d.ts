import { UserFolloweeActionEnum } from "../../enums/followers..action.enum";
import { IEntityUpdateDto } from "../../generi.types";
import { IUserFolloweeEntity } from "../entities/followers.entity.interface";
export interface IUserFollowerCreateDtoInclude {
    action: UserFolloweeActionEnum;
}
export interface IUserFollowerUpdateDto extends IEntityUpdateDto<IUserFolloweeEntity>, IUserFollowerCreateDtoInclude {
}
