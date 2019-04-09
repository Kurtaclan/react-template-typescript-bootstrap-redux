
import { Reducer } from 'redux';
import { ExampleActionTypes, ExampleState } from './types';

const initialState: ExampleState = {
  data: [],
  errors: undefined,
  loading: false
}

const reducer: Reducer<ExampleState> = (state = initialState, action) => {
  switch (action.type) {
    case ExampleActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case ExampleActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case ExampleActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as exampleReducer };
