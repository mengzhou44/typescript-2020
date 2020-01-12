import { Action, ActionTypes, ToDo } from '../actions';

export default (state: ToDo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetch_todos:
      return action.payload;
    case ActionTypes.remove_todo:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};
