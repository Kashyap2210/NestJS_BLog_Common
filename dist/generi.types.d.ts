export type IEntityFilterData<T> = {
    [K in keyof T]?: T[K][];
};
