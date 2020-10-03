import { Request, Response } from "express";
import createUser from './services/CreateUser'

export function hello(req: Request, res: Response) {
   const user = createUser('eurico', 'email', '123sad');
}