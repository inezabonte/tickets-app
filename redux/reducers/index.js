import { combineReducers } from 'redux';
import {headerReducer} from './headerReducer';
import { homeReducer } from './homeReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
});

export default rootReducer;