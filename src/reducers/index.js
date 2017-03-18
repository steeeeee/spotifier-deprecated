// Set up your root reducer here...
import { combineReducers } from 'redux';
import songsReducer from './reducer_songs';

const rootReducer = combineReducers({
    songs: songsReducer
});

export default rootReducer;
