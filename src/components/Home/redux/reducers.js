import types from './types';

const INITIAL_STATE = {
    text: ''
}

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_TEXT:
            let newState = {
                ...state,
                text: action.value
            }
            return newState;
    
        default:
            return state;
    }
}

export default homeReducer;