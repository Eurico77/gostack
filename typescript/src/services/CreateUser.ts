import ICreateUserData from './ICreateUserData';

export default function createUser({ name, email, password }: ICreateUserData) {
   const user = {
      name,
      email,
      password
   }

   return user

}