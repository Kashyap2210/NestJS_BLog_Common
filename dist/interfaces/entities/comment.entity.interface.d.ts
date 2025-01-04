import { IAuditColumnEntity } from './audit.column.entity.interface';
export interface ICommentEntity extends IAuditColumnEntity {
    id: number;
    text: string;
    authorId: number;
    blogId: number;
    isReplyComment: boolean;
    replyCommentId: number;
}
