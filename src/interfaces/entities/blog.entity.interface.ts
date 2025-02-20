import { IEntityFilterData } from "../../generi.types";
import { IAuditColumnEntity } from "./audit.column.entity.interface";

export interface IBlogEntity extends IAuditColumnEntity {
  id: number;
  title: string;
  author: string;
  keywords: string;
  content: string;
}

export type IBlogEntityArray = IBlogEntity[];

export type IBlogEntitySearchDto = IEntityFilterData<IBlogEntity>;
