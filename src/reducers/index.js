// Set up your root reducer here...
import { combineReducers } from 'redux';

import songsReducer from './reducer_songs';
import colorChangeReducer from './reducer_colorchange';

const rootReducer = combineReducers({
    songs: songsReducer,
    color: colorChangeReducer
});

export default rootReducer;
