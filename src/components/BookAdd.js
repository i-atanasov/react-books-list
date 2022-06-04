import React from "react";
import { connect } from 'react-redux';

import { addBook } from '../actions';
import BookForm from './BookForm';
import { useNavigate } from "react-router-dom";

const BookAdd = (props) => {
    const nav = useNavigate();

    const onSubmit = (formValues) => {
        props.addBook(formValues);
        const res = new Response();
        if (res.status === 200) {
            nav('/book/added');
        };
    }

    return ( 
        <div>
            <BookForm title="Add book:" onSubmit={onSubmit} />
        </div>
    );

}


export default connect(null, { addBook })(BookAdd);
