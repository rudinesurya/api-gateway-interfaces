import { ApiProperty } from '@nestjs/swagger';

export class DeleteMessageResponseDto {
    @ApiProperty({ example: 'message_delete_by_id_success' })
    system_message: string;
    @ApiProperty({ example: null, nullable: true, type: 'null' })
    data: null;
    @ApiProperty({ example: null, nullable: true })
    errors: { [key: string]: any } | null;
}