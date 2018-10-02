

export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let output = [];
  keys.forEach (key => {
    output.push(state.todos[key]);
  });
  return output;
};
