import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateEntryDTO } from './dto/createEntry.dto';
import { HappinessService } from './happiness.service';
import { ValidateObjectIdPipe } from './shared/pipes/validate-object-id.pipe';
import { Roles } from './../users/interfaces/user.interface';

@Controller('happiness')
export class HappinessController {
  constructor(
    private happinessService: HappinessService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('entry')
  async addEntry(@Body() createEntryDTO: CreateEntryDTO) {
    try {
      return await this.happinessService.addEntry(createEntryDTO);
    } catch (e) {
      return e.message;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('entry/all')
  async getAllEntries(@Headers('Authorization') authorization: string) {
    await this.authService.checkPermission(authorization, Roles.MANAGER);
    return await this.happinessService.getAllEntries();
  }

  @UseGuards(JwtAuthGuard)
  @Get('entry/:entryID')
  async getEntry(
    @Headers('Authorization') authorization: string,
    @Param('entryID', new ValidateObjectIdPipe()) entryID: string,
  ) {
    await this.authService.checkPermission(authorization, Roles.MANAGER);
    const entry = await this.happinessService.getEntry(entryID);
    if (!entry) {
      throw new NotFoundException('Entry not found');
    }
    return entry;
  }
}
