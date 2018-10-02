import React from 'react';
import {allTodos} from '../../reducers/selectors';
import TodoListItem from '../todo_list/todo_list_items';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {

  render () {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem todo = {todo} receiveTodo = {receiveTodo}/>
      )
    );
    const todoForm = <TodoForm receiveTodo = {receiveTodo}/>;
    return (
      <div>
        <ul>
          {todoItems}
        </ul>
        {todoForm}
      </div>
    );
  }
}

export default TodoList;
