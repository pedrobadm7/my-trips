import { Reducer } from 'redux'
import { CoordinatesState, CoordinatesTypes } from './types'

const INITIAL_STATE: CoordinatesState = {
  data: [
    {
      latitude: -23.564,
      longitude: -46.633
    }
  ],
  loading: false
}

const reducer: Reducer<CoordinatesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CoordinatesTypes.GET_COORDINATE:
      return { ...state, data: action.payload }
    case CoordinatesTypes.LOAD_COORDINATES:
      return { ...state, loading: true }
    default:
      return state
  }
}
export default reducer