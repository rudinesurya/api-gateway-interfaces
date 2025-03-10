import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { IUser } from './user.interface';

export class GetUserResponseDto {
    @ApiProperty({ example: 'user_get_by_id_success' })
    system_message: string;
    @ApiProperty({
        example: {
            user: {
                email: 'john@test.com',
                _id: new Types.ObjectId(),
            },
        },
        nullable: true,
    })
    data: {
        user: IUser;
    };
    @ApiProperty({ example: null, nullable: true })
    errors: { [key: string]: any } | null;
}