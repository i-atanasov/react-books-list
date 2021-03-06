import { formValues } from "react-final-form";
import books from '../api/books';

export const signIn = (userId, userName) => {
    return {
        type: "SIGN_IN",
        payload:  [userId, userName]
    };
};

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    };
};

export const searchBooks = searchTerm => async (dispatch) => {
    const res = await books.get(`/books?q=${searchTerm}`);

    dispatch({ type: "SEARCH_BOOKS", payload: res.data })
}

export const resetSearch = (search) => async (dispatch) => {
    dispatch({ type: "SEARCH_RESET", search })
}

export const addBook = formValues => async (dispatch, getState) => {
    const { userId, userName } = getState().auth;
    const dateAdded = new Date().toLocaleDateString("en-US");

    const res = await books.post('/books', { ...formValues, userId, userName, dateAdded });

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

export const editBook = (id, formValues) => async dispatch => {
    const res = await books.patch(`/books/${id}`, formValues)

    dispatch({ type: "EDIT_BOOK", payload: res.data })
}

export const deleteBook = id => async dispatch => {
    await books.delete(`/books/${id}`)
    
    dispatch({ type: "DELETE_BOOK", payload: id })
}