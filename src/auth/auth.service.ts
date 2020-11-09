import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: User['username'],
    password: User['password'],
  ): Promise<any> {
    const user = (await this.usersService.getUser(username))?.toObject();
    if (user && (await bcrypt.compare(password, user.password))) {
      const { ...result } = user;
      delete result.password;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userData: any): Promise<any> {
    const { ...newUser } = await this.usersService.addUser(userData);
    delete newUser.password;
    return newUser;
  }

  async checkPermission(authorization: string, role: string) {
    const authRole = await this.getUserRole(authorization);
    if (authRole !== role) {
      throw new UnauthorizedException(
        'You are not allowed to perform this action',
      );
    }
  }

  async getUserRole(authorization: string) {
    const { role } = await this.jwtService.verify(authorization.split(' ')[1], {
      secret: process.env.JWT_SECRET,
    });
    return role;
  }
}
