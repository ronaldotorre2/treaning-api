import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from './users/users.service';

import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    const user = await this.userService.findOne(data.email);
    if (!user || !bcrypt.compareSync(data.password, user.password)) {
      throw new Error('Invalid credentials!');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;

    return {
      access_token: this.jwtService.sign(result),
    };
  }
}
