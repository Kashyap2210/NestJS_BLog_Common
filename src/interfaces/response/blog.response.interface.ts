import { IBlogEntity } from '../entities/blog.entity.interface';
import { ICommentEntity } from '../entities/comment.entity.interface';

export type IBlogResponse = {
  blog: IBlogEntity;
  comments: ICommentEntity[];
};
