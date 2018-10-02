import React from 'react';
import {allTodos} from '../../reducers/selectors';

const TodoList = ({todos}) => {
  debugger;
  return (
    <div>
      <ul>
        {todos.forEach (todo => {
          <li>
            {todo.title}
          </li>
        })}
      </ul>
      <h3>Todo List goes here!</h3>
    </div>
  );
};

export default TodoList;
