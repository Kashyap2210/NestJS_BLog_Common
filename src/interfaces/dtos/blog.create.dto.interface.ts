export interface IBlogCreateDto {
  title: string;
  keywords: string;
  content: string;
  author: string;
}

export type IBulkBlogCreateDto = [IBlogCreateDto];
