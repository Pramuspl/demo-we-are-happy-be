import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver, Args, Query, Context } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGraphQLGuard } from 'src/auth/guards/jwt-auth-graphql.guard';
import { HappinessService } from './happiness.service';
import { ValidateObjectIdPipe } from './helpers/pipes/validate-object-id.pipe';
import { Roles } from './../users/interfaces/user.interface';
import { ValidateDatePipe } from './helpers/pipes/validate-date.pipe';

@Resolver('Happiness')
export class HappinessResolver {
  constructor(
    private authService: AuthService,
    private happinessService: HappinessService,
  ) {}
  @UseGuards(JwtAuthGraphQLGuard)
  @Mutation()
  async addEntry(@Args() newEntry) {
    try {
      const entry = await this.happinessService.addEntry(newEntry);
      return entry;
    } catch (e) {
      return e.message;
    }
  }
  @UseGuards(JwtAuthGraphQLGuard)
  @Query()
  async getEntry(
    @Args('entryID', new ValidateObjectIdPipe()) id,
    @Context() context,
  ) {
    const authorization = context.req.headers.authorization;
    await this.authService.checkPermission(authorization, Roles.MANAGER);
    return this.happinessService.getEntry(id);
  }
  @UseGuards(JwtAuthGraphQLGuard)
  @Query()
  async getAllEntries(
    @Context() context,
    @Args('from', new ValidateDatePipe()) from?,
    @Args('to', new ValidateDatePipe()) to?,
  ) {
    const authorization = context.req.headers.authorization;
    await this.authService.checkPermission(authorization, Roles.MANAGER);
    return this.happinessService.getAllEntries(from, to);
  }
}
