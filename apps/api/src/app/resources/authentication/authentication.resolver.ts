import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { LoginInput } from './dto/login.input';
import { User } from '@full-stack/api/generated/db-types';
import { UseGuards } from '@nestjs/common';
import { SetAuthGuard } from '../../guards/auth-guards/set-auth.guard';
import { IUserContext } from '../../guards/auth-guards/types';

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(SetAuthGuard)
  @Mutation(() => User)
  login(
    @Args('loginInput')
    loginInput: LoginInput,
    @Context() context: IUserContext
  ) {
    const { user } = context;
    return this.authenticationService.login(user);
  }

  @Mutation(() => User)
  signUp(
    @Args('signUpInput')
    signUpInput: LoginInput
  ) {
    return this.authenticationService.signup(signUpInput);
  }
}
