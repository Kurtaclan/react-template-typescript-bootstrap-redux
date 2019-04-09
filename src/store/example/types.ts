export interface Example {
    id: number
    name: string
  }
  
  export type ApiResponse = Record<string, any>

  export enum ExampleActionTypes {
    FETCH_REQUEST = '@@example/FETCH_REQUEST',
    FETCH_SUCCESS = '@@example/FETCH_SUCCESS',
    FETCH_ERROR = '@@example/FETCH_ERROR',
    SELECTED = '@@example/SELECTED'
  }
  
  // Declare state types with `readonly` modifier to get compile time immutability.
  // https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
  export interface ExampleState {
    readonly loading: boolean
    readonly data: Example[]
    readonly errors?: string
  }