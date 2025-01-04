import { IUserCreateDto } from '../entities/user.entity.interface';
export interface IUserUpdateDto extends Partial<IUserCreateDto> {
}
