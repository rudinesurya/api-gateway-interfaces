import { ApiProperty } from '@nestjs/swagger';

export class UpdateApplicationDto {
    @ApiProperty({
        example: "new updated cover letter",
    })
    cover_letter: string;
}