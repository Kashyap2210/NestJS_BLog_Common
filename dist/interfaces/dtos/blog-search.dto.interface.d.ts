import { IEntityFilterData } from "../../generi.types";
import { IBlogEntity } from "../entities/blog.entity.interface";
export interface IBlogSearchDto extends IEntityFilterData<IBlogEntity> {
}
