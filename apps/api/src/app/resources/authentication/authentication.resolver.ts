import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { LoginInput } from './dto/login.input';
import { User } from '@full-stack/api/generated/db-types';
import { UseGuards } from '@nestjs/common';
import { SetAuthGuard } from '../../guards/auth-guards/set-auth.guard';

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(SetAuthGuard)
  @Mutation(() => User)
  login(
    @Args('loginInput')
    loginInput: LoginInput
  ) {
    return this.authenticationService.login(loginInput);
  }

  @Mutation(() => User)
  signUp(
    @Args('signUpInput')
    signUpInput: LoginInput
  ) {
    return this.authenticationService.signup(signUpInput);
  }
}
