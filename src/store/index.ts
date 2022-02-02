import { createStore, Store } from 'redux'
import { CoordinatesState } from './ducks/cordinates/types'

import rootReducer from './ducks/rootReducer'

export interface ApplicationState {
  coordinates: CoordinatesState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
