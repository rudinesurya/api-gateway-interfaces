import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { IUser } from '@rudinesurya/users-service-interfaces';

export class CreateUserResponseDto {
    @ApiProperty({ example: 'user_create_success' })
    system_message: string;
    @ApiProperty({
        example: {
            user: {
                email: 'john@test.com',
                _id: new Types.ObjectId()
            },
        },
        nullable: true,
    })
    data: {
        user: IUser;
        token: string;
    };
    @ApiProperty({ example: null, nullable: true })
    errors: { [key: string]: any } | null;
}