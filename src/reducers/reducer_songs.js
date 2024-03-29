import * as types from '../constants/action_types';

export default (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_SONGS:
            return action.payload.data;
    }

    return state;
}
