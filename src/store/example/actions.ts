import { action } from 'typesafe-actions';
import { Example, ExampleActionTypes } from './types';

export const fetchRequest = () => action(ExampleActionTypes.FETCH_REQUEST)
export const fetchSuccess = (data: Example[]) => action(ExampleActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(ExampleActionTypes.FETCH_ERROR, message)