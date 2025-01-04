import { UserGender } from '../../enums/user.gender.enum';
import { IAuditColumnEntity } from './audit.column.entity.interface';
export interface IUserEntity extends IAuditColumnEntity {
    id: number;
    name: string;
    username: string;
    password: string;
    emailId: string;
    contactNo: string;
    profilePictureUrl: string;
    gender: UserGender;
    role: string;
}
export type IUserEntityArray = IUserEntity[];
export interface IUserCreateDto extends Partial<IUserEntity> {
}
export interface IBulkUserCreateDto {
    users: IUserCreateDto[];
}
