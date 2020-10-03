import { Request, Response } from "express";
import createUser from './services/User/CreateUser'

export function hello(req: Request, res: Response) {
   const user = createUser({
      name: 'eurico',
      email: 'euricotest@test',
      password: '123',
      techs: ['Nodejs', 'typescript',
         { title: 'Javascript', experience: 100 },
         { title: 'VueJs', experience: 80 }
      ]
   });

   return user;
}