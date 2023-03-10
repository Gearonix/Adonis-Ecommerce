import { createSelector } from '@reduxjs/toolkit'
import { UserSelectors } from 'shared/selectors'
import { User } from 'shared/types/slices'
import Helpers from 'shared/lib/helpers/helpers'
import { raiseGoogleImageQuality } from 'widgets/Profile/lib/helpers'
import { Nullable } from 'shared/types/common'
import { UserRoles } from 'app/config/globals'

export interface FormattedUser extends User{
  userName: string,
  description: string,
  userImage: Nullable<string>,
  background: string,
  country: string,
  city: string,
  date: string,
  role: UserRoles,
  userId: number
}


export const selectReformattedUser = createSelector(UserSelectors.user, (nullableUser): Nullable<FormattedUser> => {
  const user = nullableUser as User

  if (!user.userId) return null

  const helpers = new Helpers()

  const userEmail = helpers.emailToName(user.email)

  const userName = user.firstName ? helpers.attachStrings(
      user.firstName, user.lastName) : userEmail

  const userImage = raiseGoogleImageQuality(user.avatar)

  const date = helpers.reformatMysqlDate(user.registration_date)

  return {
    ...user,
    userName,
    description: user.description,
    userImage,
    background: user.background,
    country: user.country,
    city: user.city,
    role: user.role,
    date,
    userId: user.userId
  }
})
