import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  User,
} from '@full-stack/api/generated/db-types';
import { UseGuards } from '@nestjs/common';
import { CheckAuthGuard } from '../../guards/auth-guards/check-auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(CheckAuthGuard)
  @Mutation(() => User)
  createUser(@Args() userCreateArguments: CreateOneUserArgs) {
    return this.userService.create(userCreateArguments);
  }

  @UseGuards(CheckAuthGuard)
  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(CheckAuthGuard)
  @Query(() => User, { name: 'user' })
  findOne(@Args() findUserArguments: FindUniqueUserArgs) {
    return this.userService.findOne(findUserArguments);
  }

  @UseGuards(CheckAuthGuard)
  @Mutation(() => User)
  updateUser(@Args() userUpdateInput: UpdateOneUserArgs) {
    return this.userService.update(userUpdateInput);
  }

  @UseGuards(CheckAuthGuard)
  @Mutation(() => User)
  removeUser(@Args() removeUserArguments: FindUniqueUserArgs) {
    return this.userService.remove(removeUserArguments);
  }
}
