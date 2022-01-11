import React, { Component } from 'react'

export default class CounterLifeCyle extends Component {
    state = {
        counter: 5
    }

    componentDidMount() {
        const { counter } = this.state;
        console.log(`Current counter didmount : ${counter}`);
    }


    componentDidUpdate() {
        const { counter } = this.state;
        console.log(`Current counter didUpdate : ${counter}`);
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }


    render() {
        return (
            <div>
                <h1>Counter Arrow: {this.state.counter}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
