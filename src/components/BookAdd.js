import React from "react";
import { connect } from 'react-redux';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { addBook } from '../actions';
import BookForm from './BookForm';

const BookAdd = (props) => {

    const {id} = useParams()
    const nav = useNavigate();

    const bookData = useSelector((state) => state.books[id]);

    const onSubmit = (formValues) => {
        props.addBook(formValues);
        const res = new Response();
        if (res.status === 200) {
            nav('/book/added');
        };
    }

    return ( 
        <div>
            <BookForm title="Add book:" initialValues={bookData} onSubmit={onSubmit} />
        </div>
    );

}


export default connect(null, { addBook })(BookAdd);
