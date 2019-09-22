import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTimer } from '../actions';
import { formatTime} from '../utils';

class TimerView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { index, toggleTimer, timer } = this.props;
        return (
            <div>
                <h2>{timer.name}</h2>
                <h1>{formatTime(timer.time)}</h1>
                <button onClick={(e) => {
                    toggleTimer(index)
                }}>
                    {timer.isRunning ? "Stop":"Start"}
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = () => {
    return { toggleTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(TimerView)