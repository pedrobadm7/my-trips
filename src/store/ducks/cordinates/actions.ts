import { action } from 'typesafe-actions'
import { CoordinatesTypes, Coordinate } from './types'

export const getCoordinate = (data: Coordinate[]) =>
  action(CoordinatesTypes.GET_COORDINATE, data)

export const loadCoordinate = () => action(CoordinatesTypes.LOAD_COORDINATES)
