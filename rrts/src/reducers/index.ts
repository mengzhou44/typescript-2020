import {combineReducers} from 'redux'
import  * as actions  from '../actions'

import  todos from './todo-reducer';

export interface  StoreState{ 
    todos: actions.ToDo[]
}

export default combineReducers<StoreState>({
   todos
})
