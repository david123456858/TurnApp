import { userInfo } from '../../../Dtos/users/userInfo'
import { Users } from '../../../Entity/Users/users'

export const convertInfoUsers = (users: Users[]): any => {
  const classConverted: any = []

  users.forEach(elements => {
    const user = new userInfo()
    user.email = elements.email
    user.nameCompany = elements.nameCompany
    user.nit = elements.nit
    user.numberPhone = elements.numberPhone

    classConverted.push(user)
  })

  return classConverted
}
export const convertInfoUser = (users: Users): any => {
  const user = new userInfo()
  user.email = users.email
  user.nameCompany = users.nameCompany
  user.nit = users.nit
  user.numberPhone = users.numberPhone

  return user
}
