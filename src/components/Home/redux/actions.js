import types from './types';

export const getText = value => {
    return {
        type: types.GET_TEXT,
        value: value
    }
}

export const setText = value => {
    return {
        type: types.SET_TEXT,
        value: value
    }
}

export default {
    getText,
    setText
}