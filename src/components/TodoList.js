import React from 'react';
import Items from './Items';
import Counter from './Counter';
import '../styles/TodoList.scss';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      items: []
    };
  }
  componentDidMount() {
    console.log('Render happened');
    //? Check if localStorage exists
    const items = JSON.parse(localStorage.getItem('todo-app'));
    if (items) this.setState({ items });
  }
  componentDidUpdate() {
    console.log('Updated');
    const items = this.state.items;
    localStorage.setItem('todo-app', JSON.stringify(items));
    //? every time a state changes
  }
  handleChange = event => this.setState({ newItem: event.target.value });

  handleDelete = id => {
    console.log(`Deleting id: ${id}`);
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({ items });
  };

  handleStatus = id => {
    console.log(`Status changed on: ${id}`);
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.status = !item.status;
        return item;
      } else return item;
    });
    this.setState({ items });
  };

  handleSubmit = event => {
    //? prevent default - no page reload
    event.preventDefault();
    //? set the new item to add to array
    const newItem = {
      id: Date.now(),
      text: this.state.newItem.trim(),
      status: false
    };
    if (newItem.text !== '')
      //? update the array in the state
      this.setState(prevState => ({
        //? items: prevState.items.concat(newItem),
        items: [...prevState.items, newItem],
        newItem: ''
      }));
  };

  render() {
    return (
      <div>
        <Items
          onStatus={this.handleStatus}
          onDelete={this.handleDelete}
          items={this.state.items}
        />
        <Counter items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control mb-4"
            placeholder="Add a new task"
            onChange={this.handleChange}
            type="text"
            id="todo-item"
            value={this.state.newItem}
          ></input>
          <button className="btn btn-danger">Add to list</button>
        </form>
      </div>
    );
  }
}
