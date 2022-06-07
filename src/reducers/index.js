import { combineReducers } from "redux";
import _ from 'lodash';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return { ...state, isSignedIn: true, userId: action.payload[0], userName: action.payload[1] };
        case "SIGN_OUT":
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
        }
    };

const bookReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return { ...state, [action.payload.id]: action.payload };
        case "FETCH_BOOK":
            return { ...state, [action.payload.id]: action.payload };
        case "EDIT_BOOK":
            return { ...state, [action.payload.id]: action.payload };
        case "FETCH_BOOKS":
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case "DELETE_BOOK":
            return _.omit(state, action.payload);
        default: 
            return state;
    }
}

    export default combineReducers({
        auth: authReducer,
        books: bookReducer
      });

