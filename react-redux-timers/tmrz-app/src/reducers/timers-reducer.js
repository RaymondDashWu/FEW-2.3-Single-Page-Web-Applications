import { NEW_TIMER, TOGGLE_TIMER } from '../actions'
import Timer from '../Timer';

const timerReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_TIMER:
            const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
            return [...state, new Timer(name)]

        case TOGGLE_TIMER:
            const newState = state.map((timer, index) => {
                if (action.payload.index === index) {
                    return {...timer, isRunning: !timer.isRunning}
                }
                return timer
            })
            return newState

        default:
            return state
    }
}

export default timerReducer;