interface TechObject {
   title: string,
   experience: number
}

export default interface CreateUserData {
   name?: string,
   email: string,
   password: string,
   techs: Array<TechObject | string>
}