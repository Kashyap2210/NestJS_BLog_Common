export interface IBlogCreateDto {
    title: string;
    keywords: string;
    content: string;
}
export type IBulkBlogCreateDto = [IBlogCreateDto];
