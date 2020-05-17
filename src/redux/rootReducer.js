import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import homeReducer from '../components/Home/redux/reducers';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    home: homeReducer
})

export default rootReducer;