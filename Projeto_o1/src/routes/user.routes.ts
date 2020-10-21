import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const user = Router();

// user.get('/', (req, res) => {
//   const userRepository = getRepository(UserRepository);
//   const users = userRepository.find();

//   return res.json(users);
// })

user.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password
    });

    return res.json(user)
  } catch (err) {
    return res.status(400).json({ error: err.mesaage })
  }
})

export default user;


