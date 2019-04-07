import React from 'react';
import { connect } from 'react-redux';
import counterAction from '../redux/counter/action';

const { dispatcher } = counterAction;

class Count extends React.Component {

    render() {
        const { count } = this.props;
        return (
            <div>
                <h2>Counter : {count} </h2>
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.subtract}>-</button>
            </div>
        )
    }
}

export default connect(state => state.counter, dispatcher )(Count);