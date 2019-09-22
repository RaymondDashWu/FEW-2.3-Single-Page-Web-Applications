import React, { Component } from 'react';
import { connect } from 'react-redux';
import './new-timer.css';

import { addTimer } from '../actions';

class NewTimer extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "" }
    }

    render() {
        return (
            <div className='new-timer'>
                <input
                    className='new-timer__input'
                    type="text"
                    placeholder="New Timer Name"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })} />
                <button className='new-timer__button' onClick={(e) => this.props.addTimer(this.state.name)}>Save</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = () => {
    return { addTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(NewTimer)