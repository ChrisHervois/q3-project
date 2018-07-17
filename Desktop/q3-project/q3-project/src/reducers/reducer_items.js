import _ from 'lodash';
import { FETCH_ITEMS } from '../actions';


export default function (state = {}, action) {
    switch (action.type) {
        // case FETCH_POST:
        //     return { ...state, [action.payload.data.id]: action.payload.data }
        case FETCH_ITEMS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}