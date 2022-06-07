import React from "react";
import { connect } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from 'lodash';

import { addBook } from '../actions';
import BookForm from './BookForm';

const BookAdd = (props) => {
    const { id } = useParams()
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
            <BookForm 
                title="Add book:" 
                initialValues={_.pick(bookData, "title", "author", "coverurl", "published")} 
                onSubmit={onSubmit} 

            />
        </div>
    );

}


export default connect(null, { addBook })(BookAdd);
