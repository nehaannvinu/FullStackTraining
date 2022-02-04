import * as type from '../constants'

export const getUsers = (users) => {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: users
  }
}