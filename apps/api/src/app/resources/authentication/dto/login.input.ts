import { UserCreateInput } from '@full-stack/api/generated/db-types';
import { InputType, PickType } from '@nestjs/graphql';

@InputType()
export class LoginInput extends PickType(UserCreateInput, [
  'email',
  'password',
]) {}
