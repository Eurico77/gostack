import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import User from '../models/User'
import UserRepository from '../repositories/UserRepository'

interface Request {
  date: Date
}

class CreateUserService {
  public async execute({ date }: Request): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const userDate = startOfHour(date)

    const findUserForDate = userRepository.findByDate(
      userDate
    )
    if (findUserForDate) {
      throw Error('This User is already booked');

    }

    const user = userRepository.create({
      name,
      data: userDate
    })


    await userRepository.save(user)
    return user;


  }
}
export default CreateUserService;
