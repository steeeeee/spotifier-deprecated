import * as types from '../constants/action_types';

export default (state = {}, action) => {
    switch(action.type) {
        case types.CHANGE_COLOR:
            return action.payload;
    }
    return state;
}
