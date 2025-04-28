import { UserFolloweeStatusEnum } from "../../enums/follower.status.enum";
import { IAuditColumnEntity } from "./audit.column.entity.interface";
export interface IUserFolloweeEntity extends IAuditColumnEntity {
    id: number;
    userId: number;
    followeeUserId: number;
    status: UserFolloweeStatusEnum;
}
