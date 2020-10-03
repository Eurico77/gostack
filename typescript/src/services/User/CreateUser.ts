import ICreateUserData from './ICreateUserData';

export default function createUser({ name, email, password, techs }: ICreateUserData) {
   const user = {
      name,
      email,
      password,
      techs
   }

   return user

}