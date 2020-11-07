import { Module } from '@nestjs/common';
import { HappinessController } from './happiness.controller';
import { HappinessService } from './happiness.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntrySchema } from './schemas/entry.schema';
import { AuthModule } from 'src/auth/auth.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Entry', schema: EntrySchema }]),
    AuthModule,
  ],
  controllers: [HappinessController],
  providers: [HappinessService, JwtAuthGuard],
})
export class HappinessModule {}
