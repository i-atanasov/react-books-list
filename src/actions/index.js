import { formValues } from "react-final-form";
import history from '../history';
import books from '../api/books';

export const signIn = (userId) => {
    return {
        type: "SIGN_IN",
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    };
};

export const addBook = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const res = await books.post('/books', { ...formValues, userId });

    dispatch({ type: "ADD_BOOK", payload: res.data });
};

export const fetchBooks = () => async dispatch => {
    const res = await books.get('/books')

    dispatch({ type: "FETCH_BOOKS", payload: res.data });
};


export const fetchBook = (id) => async dispatch => {
    const res = await books.get(`/books/${id}`)

    dispatch({ type: "FETCH_BOOK", payload: res.data });
};