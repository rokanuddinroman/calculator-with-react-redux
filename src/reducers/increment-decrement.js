const initailState = 0;

const updatingNumber = (state = initailState, action) => {
    // switch is work like if else 

    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default updatingNumber;