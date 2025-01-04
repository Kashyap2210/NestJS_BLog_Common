import { LikeStatus } from '../../enums/like.status.enum';
import { IAuditColumnEntity } from './audit.column.entity.interface';

export interface IBlogLikesCounterEntity extends IAuditColumnEntity {
  id: number;
  blogId: number;
  likedStatus: LikeStatus;
  likedBy: number; //id of the user that liked it
  disLikedBy: number; //id of the user that disliked it
}
