// state = {todo: []}

// Action (receive todos)

// Actions goes through state ----> passes to reducer with
// following parameters : (currentState ([]), action)
// reducer will create new state based off of action
// passes state back to store (and updates store)
// new store = ['get milk']
// this store is then passed to component that cares
// updates component


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
