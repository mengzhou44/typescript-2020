import axios from 'axios';
import { ActionTypes } from './types';
import { Dispatch } from 'redux';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchToDosAction {
  type: ActionTypes.fetch_todos;
  payload: ToDo[];
}

export interface RemoveToDoAction {
  type: ActionTypes.remove_todo;
  payload: ToDo;
}

export function fetchToDos(callback: () => void) {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
    dispatch<FetchToDosAction>({
      type: ActionTypes.fetch_todos,
      payload: response.data
    });
    callback();
  };
}

export function removeToDo(todo: ToDo): RemoveToDoAction {
  return {
    type: ActionTypes.remove_todo,
    payload: todo
  };
}
