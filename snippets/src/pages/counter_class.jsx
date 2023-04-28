import React, { Component } from 'react';
class Counter_Class extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
    }
    state = { count: 0 };
    increment = () => {
        // alert("increment");
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        // alert("decrement");
        this.setState({ count: this.state.count - 1 });
    };
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUmount');
    }
    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => this.increment()}>
                    +
                </button>
                <label>{this.state.count}</label>
                <button onClick={() => this.decrement()}>
                    -
                </button>
                <label></label>
            </div>
        );
    }
}

export default Counter_Class;