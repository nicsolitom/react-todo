//rcc - react class component (snipp)
import React from 'react'
import Item from './Item'

export default class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: '',
            items: []
        }
    }

    handleChange = (event) => this.setState({ newItem: event.target.value })

    handleSubmit = (event) => {
        // prevent default - no page reload
        event.preventDefault()
        // set the new item to add to array
        const newItem = this.state.newItem.trim();
        if (newItem !== "")
            // update the array in the state
            this.setState(prevState => ({
                items: prevState.items.concat(newItem),
                newItem: ''
            }))
    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>

                <p>A list of thing to do</p>
                <Item items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        id="todo-item"
                        value={this.state.newItem}
                    >
                    </input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
