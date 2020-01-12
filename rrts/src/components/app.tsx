import React, { useState } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { StoreState } from '../reducers';


interface AppProps {
  todos: actions.ToDo[];
  fetchToDos: (callback: ()=>void) => void;
  removeToDo: (todo: actions.ToDo) => void;
}

function App(appProps: AppProps) {
  const [loading, setLoading] = useState(false);
  function renderToDo(todo: actions.ToDo) {
    return <div 
         key={todo.id}
         onClick={()=> {
            appProps.removeToDo(todo)
         }}
    
        >{todo.title}
        </div>;
  }

  function renderFetchButton() {
    if (loading === false) {
      return (
        <button
          onClick={() => {
            setLoading(true);
            appProps.fetchToDos(() => setLoading(false));
          }}
        >
          Fetch To List
        </button>
      );
    }

    return <div>Fetching ...</div>
  }
  return <div>
      {renderFetchButton()}
      {appProps.todos.map(renderToDo)}
    </div>;
}

function mapStateToProps({ todos }: StoreState) {
  return {
    todos
  };
}

export default connect(mapStateToProps, actions)(App);
