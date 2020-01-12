import { FetchToDosAction, RemoveToDoAction } from './todo';

export type Action = FetchToDosAction | RemoveToDoAction;

export enum ActionTypes {
  fetch_todos,
  remove_todo
}
