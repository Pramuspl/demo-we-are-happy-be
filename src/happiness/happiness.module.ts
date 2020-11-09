import { Module } from '@nestjs/common';
import { HappinessController } from './happiness.controller';
import { HappinessService } from './happiness.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntrySchema } from './schemas/entry.schema';
import { AuthModule } from 'src/auth/auth.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HappinessResolver } from './happiness.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Entry', schema: EntrySchema }]),
    AuthModule,
  ],
  controllers: [HappinessController],
  providers: [HappinessService, JwtAuthGuard, HappinessResolver],
})
export class HappinessModule {}
