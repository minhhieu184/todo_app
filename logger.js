

function logger(reducer){
    return (state, action, args) => {
        console.group(action)
        console.log('Prev State: ', state);
        console.log('Arguments: ', args);
        const newState = reducer(state, action, args)
        console.log('New State: ', newState);
        console.groupEnd()
        return newState
    }
}

export default logger