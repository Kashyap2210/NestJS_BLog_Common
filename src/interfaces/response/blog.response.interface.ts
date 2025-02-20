import { IBlogEntity } from "../entities/blog.entity.interface";
import { IBlogLikesCounterEntity } from "../entities/blog.likes.counter.entity.interface";
import { ICommentEntity } from "../entities/comment.entity.interface";
import { IUserEntity } from "../entities/user.entity.interface";

export type IBlogResponse = {
  blog: IBlogEntity;
  comments: ICommentEntity[];
  likes: IBlogLikesCounterEntity[];
  users: IUserEntity[];
};
