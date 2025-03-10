import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { IUserRating } from './user-rating.interface';

export class CreateUserRatingResponseDto {
    @ApiProperty({ example: 'user_rating_create_success' })
    system_message: string;
    @ApiProperty({
        example: {
            user_rating: {
                rater: new Types.ObjectId(),
                rated_user: new Types.ObjectId(),
                rating: 5,
                comment: 'asdasd',
            },
        },
        nullable: true,
    })
    data: {
        user_rating: IUserRating;
    };
    @ApiProperty({ example: null, nullable: true })
    errors: { [key: string]: any } | null;
}