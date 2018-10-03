// state = {todo: []}

// Action (receive todos)

// Actions goes through state ----> passes to reducer with
// following parameters : (currentState ([]), action)
// reducer will create new state based off of action
// passes state back to store (and updates store)
// new store = ['get milk']
// this store is then passed to component that cares
// updates component

import * as APIUtil from '../util/todo_api_util';

export const FETCH_TODOS = 'FETCH_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todosHsh) => ({
  type: RECEIVE_TODOS,
  todosHsh
});
export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});
export const fetchTodos = () => dispatch => (
    APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
  );
