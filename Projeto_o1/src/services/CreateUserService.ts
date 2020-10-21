import { getRepository } from 'typeorm';

import User from '../models/User'

interface Body {
  name: string,
  email: string,
  password: string
}

class CreateUserService {
  public async execute({ name, email, password }: Body): Promise<User> {
    const userRepository = getRepository(User);

    const chekUserExists = await userRepository.findOne({
      where: { email, }
    })

    if (chekUserExists) {
      throw new Error('Email address already exists ');
    }

    const user = userRepository.create({
      name,
      email,
      password
    })
    await userRepository.save(user);

    return user;
  }
}
export default CreateUserService;
