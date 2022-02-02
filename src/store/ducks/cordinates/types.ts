/* eslint-disable no-unused-vars */
/**
 * Action Types
 */
export enum CoordinatesTypes {
  LOAD_COORDINATES = '@coordinates/LOAD_COORDINATES',
  GET_COORDINATE = `@coordinates/GET_COORDINATE`
}

/**
 * Data types
 */
export interface Coordinate {
  latitude: number
  longitude: number
}

/**
 * State type
 */
export interface CoordinatesState {
  data: Coordinate[]
  loading: boolean
}
