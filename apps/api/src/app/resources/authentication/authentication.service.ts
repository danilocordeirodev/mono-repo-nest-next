import { Injectable } from '@nestjs/common';
import { LoginInput } from './dto/login.input';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    return this.userService.findOne({ where: { email } });
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
