import { DbService } from '@full-stack/api/data-access-db';
import { UserCreateInput } from '@full-stack/api/generated/db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private db: DbService) {}

  create(userCreateInput: UserCreateInput) {
    return this.db.user.create({data: userCreateInput})
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
