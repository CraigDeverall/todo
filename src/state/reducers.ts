import { todoReducer } from './todoReducer';
import { combineReducers, Reducer } from 'redux';

export const reducers = combineReducers({
    todoList: todoReducer as Reducer,
  })