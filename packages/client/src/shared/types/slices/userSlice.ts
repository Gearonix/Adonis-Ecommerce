import {UserRoles} from 'app/config/globals'

export interface UserSlice {
    role: UserRoles,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string,
    background: string,
    description: string
    country: string,
    city: string
    userId: number,
    registration_date: string
}
