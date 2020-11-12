import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateDatePipe implements PipeTransform<string> {
  async transform(value: string) {
    const isValid = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value);
    if (value && !isValid) {
      throw new BadRequestException('Invalid Date');
    }
    return value;
  }
}
