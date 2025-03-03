import { IEntityFilterData } from "../../generi.types";
import { ICommentEntity } from "../entities/comment.entity.interface";
export interface ICommentSearchDto extends IEntityFilterData<ICommentEntity> {
}
