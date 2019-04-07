import React from 'react';

class Count extends React.Component {

    state = {
        count: 0
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h2>Counter : {count} </h2>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }

    handleIncrease = () => {
        const count = this.state.count + 1;
        this.setState({count});
    }

    handleDecrease = () => {
        const count = this.state.count - 1;
        this.setState({count});
    }
}

export default Count;