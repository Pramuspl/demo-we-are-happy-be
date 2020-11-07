import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Get,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() body) {
    return this.authService.register(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // Remove after development
  @UseGuards(JwtAuthGuard)
  @Get('verifyToken')
  async verifyLogin(@Headers('Authorization') authorization: string) {
    return this.jwtService.verify(authorization.split(' ')[1], {
      secret: process.env.JWT_SECRET,
    });
  }
}
