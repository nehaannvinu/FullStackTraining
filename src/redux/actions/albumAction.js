import * as type from '../constants'

export const getAlbum = (users) => {
  return {
    type: type.GET_ALBUM_REQUESTED,
    payload: users
  }
}