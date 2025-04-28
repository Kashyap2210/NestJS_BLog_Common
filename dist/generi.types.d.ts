import { IAuditColumnEntity } from "./interfaces/entities/audit.column.entity.interface";
export type IEntityFilterData<T> = {
    [K in keyof T]?: T[K][];
};
export type IEntityCreateDto<T> = Omit<T, "id" | keyof IAuditColumnEntity>;
export type IEntityUpdateDto<T> = Omit<Partial<T>, "id" | keyof IAuditColumnEntity>;
