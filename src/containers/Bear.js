import React from 'react';
import { connect } from 'react-redux';
import bearAction from '../redux/bear/action';

const { dispatcher } = bearAction;

class Bear extends React.Component {

    state = {
        name: '',
        weight: 0
    }

    componentDidMount() {
        this.props.getBears();
    }

    render() {
        const { bears } = this.props;
        console.log(bears);
        return (
            <div style={{ marginTop: 20 }}>
                <input type='text' name='name' onChange={this.handleChange} placeholder='Bear name' />
                <br></br>
                <input type='text' name='weight' onChange={this.handleChange} placeholder='Bear weight' />
                <br></br>
                <button onClick={this.handleAdd}>Add</button>
                <table>
                    <tbody>
                        {bears && bears.map((bear, index) => {
                            if (!bear)
                                return null;
                            return (
                                <tr key={index}>
                                    <td>{bear.id + 1}. {bear.name}</td>
                                    <td>weight : {bear.weight}</td>
                                    <td><button id={bear.id} onClick={this.handleUpdate}>update</button></td>
                                    <td><button id={bear.id} onClick={this.handleDelete}>delete</button></td>
                                </tr>
                            )})}
                    </tbody>
                </table>
            </div>
        )
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleAdd = (e) => {
        const bearInfo = {
            name: this.state.name,
            weight: parseInt(this.state.weight)
        }
        this.props.addBear(bearInfo);
    }

    handleDelete = (e) => {
        const { id } = e.target;
        this.props.deleteBear(id);
    }

    handleUpdate = (e) => {
        const { id } = e.target;
        const bearInfo = {
            name: this.state.name,
            weight: parseInt(this.state.weight)
        }
        this.props.updateBear(id, bearInfo);
    }

}

export default connect(state => state.bear, dispatcher)(Bear);