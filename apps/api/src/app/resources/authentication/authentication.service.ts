import { Injectable } from '@nestjs/common';
import { LoginInput } from './dto/login.input';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@full-stack/api/generated/db-types';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } });
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return user;
  }
  login(loginInput: LoginInput) {
    return { id: loginInput.email };
  }

  async signup(signUpInput: LoginInput) {
    const { email, password: plainPassword } = signUpInput;
    const password = await bcrypt.hash(plainPassword, 10);
    return this.userService.create({ data: { email, password } });
  }
}
