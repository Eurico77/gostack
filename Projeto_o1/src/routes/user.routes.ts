import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns'

import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

const user = Router();

user.get('/', (req, res) => {
  const userRepository = getCustomRepository(UserRepository);
  const users = userRepository.find();

  return res.json(users);
})

user.post('/', (req, res) => {
  try {
    const { date, } = req.body;
    const parseDate = parseISO(date);
    const createUser = new CreateUserService();
    const user = createUser.execute({
      date: parseDate,

    })
    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.mesaage })
  }
})

export default user;


