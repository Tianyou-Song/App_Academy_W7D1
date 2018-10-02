import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todosHsh.forEach ( todo => {
        nextState[todo.id] = todo;
      });
      return nextState;

    case RECEIVE_TODO:
      const id = action.todo.id;
      const newTodo = {[id]: action.todo};
      return merge(newState, newTodo);

    default:
      return state;
  }
};

export default todosReducer;
