const TMRZ_STATE = "TMRZ_STATE";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(TMRZ_STATE);
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState);
    } catch(err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(TMRZ_STATE, serializedState)
    } catch(err) {
        console.log("Error saving data")
    }
}

export const formatTime = (time) => {
    const ms = Math.round(time / 100) % 10;
    const secs = Math.floor(time / 1000) % 60;
    const mins = Math.floor(time / 1000 / 60) % 60;
    const hrs = Math.floor(time / 1000 / 1000 / 60) % 60;
    return `${hrs}:${mins}:${secs}:${ms}`
}