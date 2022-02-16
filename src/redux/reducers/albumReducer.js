import * as type from '../constants'

const initialState = {
    users: [],
    loading: '',
    error: null
  }
  
  export default function users(state = initialState, action) {
    switch (action.type) {
      case type.GET_ALBUM_REQUESTED:
        return {
          ...state,
          loading: true,
        }
      case type.GET_ALBUM_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.users
        }
      case type.GET_ALBUM_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
        }
      default:
        return state
    }
  }