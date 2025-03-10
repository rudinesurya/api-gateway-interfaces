import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { IMessage } from '@rudinesurya/messages-service-interfaces';

export class CreateMessageResponseDto {
    @ApiProperty({ example: 'message_create_success' })
    system_message: string;
    @ApiProperty({
        example: {
            message: {
                sender: new Types.ObjectId(),
                recipient: new Types.ObjectId(),
                content: "asd",
            },
        },
        nullable: true,
    })
    data: {
        message: IMessage;
    };
    @ApiProperty({ example: null, nullable: true })
    errors: { [key: string]: any } | null;
}