import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private localStrategy: LocalStrategy,
  ) {}

  @Mutation()
  async login(@Args() req) {
    const { username, password } = req;
    const user = await this.localStrategy.validate(username, password);
    return this.authService.login(user);
  }

  @Mutation()
  async register(@Args() args) {
    return this.authService.register(args);
  }
}
