import { DbService } from '@full-stack/api/data-access-db';
import { CreateOneUserArgs, FindUniqueUserArgs, UpdateOneUserArgs } from '@full-stack/api/generated/db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private db: DbService) {}

  create(userCreateArguments: CreateOneUserArgs) {
    return this.db.user.create(userCreateArguments)
  }

  findAll() {
    return this.db.user.findMany();
  }

  findOne(findUserArguments: FindUniqueUserArgs) {
    return this.db.user.findUnique(findUserArguments);
  }

  update(userUpdateInput: UpdateOneUserArgs) {
    return this.db.user.update(userUpdateInput);
  }

  remove(removeUserArguments: FindUniqueUserArgs) {
    return this.db.user.delete(removeUserArguments);
  }
}
