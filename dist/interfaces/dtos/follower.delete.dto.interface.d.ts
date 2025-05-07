import { IUserFollowerSearchDto } from "./follower.search.dto.interface";
export interface IDeleteFollowerDto extends IUserFollowerSearchDto {
    userId: number[];
    followeeUserId: number[];
}
