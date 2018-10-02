
import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.generateId(),
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  generateId() {
    return Math.floor(Math.random()*1902731290837);
  }
  handleChange(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: this.generateId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: "",
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Title:
          <input type="string" value={this.state.title} onChange={this.handleChange('title')}></input>
        </label>
        <label> Body:
          <input type="text" value={this.state.body} onChange={this.handleChange('body')}></input>
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }

  componentDidUpdate() {

  }
}


export default TodoForm;
