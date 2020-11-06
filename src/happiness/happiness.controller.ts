import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateEntryDTO } from './dto/createEntry.dto';
import { HappinessService } from './happiness.service';
import { ValidateObjectId } from './shared/validate-object-id.pipe';

@Controller('happiness')
export class HappinessController {
  constructor(private happinessService: HappinessService) {}

  @Post('entry')
  // TODO Add Validate User Exists Pipe
  async addEntry(@Body() createEntryDTO: CreateEntryDTO) {
    try {
      return await this.happinessService.addEntry(createEntryDTO);
    } catch (e) {
      return e.message;
    }
  }

  @Get('entry/all')
  async getAllEntries() {
    return this.happinessService.getAllEntries();
  }

  @Get('entry/:entryID')
  async getEntry(@Param('entryID', new ValidateObjectId()) entryID) {
    const entry = await this.happinessService.getEntry(entryID);
    if (!entry) {
      throw new NotFoundException('Entry not found');
    }
    return entry;
  }
}
