//rcc - react class component (snipp)
import React from 'react'

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
        const newItem = this.state.newItem;
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
                {/* HERE WE'LL ADD THE COMP. TO SHOW THE LIST */}
                <p>A list of thing to do</p>
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
