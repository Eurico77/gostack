import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByDate(date: Date): Promise<User | null> {
    const findAllUsers = await this.findOne({
      where: { date },
    });

    return findAllUsers || null;
  }


}

export default UserRepository;
