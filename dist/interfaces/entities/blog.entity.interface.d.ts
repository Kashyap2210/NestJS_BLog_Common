import { IAuditColumnEntity } from './audit.column.entity.interface';
export interface IBlogEntity extends IAuditColumnEntity {
    id: number;
    title: string;
    author: string;
    keywords: string;
    content: string;
}
export type IBlogEntityArray = IBlogEntity[];
