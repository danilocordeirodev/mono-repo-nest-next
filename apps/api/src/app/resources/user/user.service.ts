import { DbService } from '@full-stack/api/data-access-db';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from '@full-stack/api/generated/db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private database: DbService) {}

  create(userCreateArguments: CreateOneUserArgs) {
    return this.database.user.create(userCreateArguments);
  }

  findAll() {
    return this.database.user.findMany();
  }

  findOne(findUserArguments: FindUniqueUserArgs) {
    return this.database.user.findUnique(findUserArguments);
  }

  update(userUpdateInput: UpdateOneUserArgs) {
    return this.database.user.update(userUpdateInput);
  }

  remove(removeUserArguments: FindUniqueUserArgs) {
    return this.database.user.delete(removeUserArguments);
  }
}
