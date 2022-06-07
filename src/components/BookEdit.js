import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from 'lodash';

import { editBook, fetchBook } from "../actions";
import BookForm from "./BookForm";

const BookEdit = (props) => {
    useEffect(() => {
        props.fetchBook(id)
    }, []);

    const { id } = useParams();
    const nav = useNavigate();
    
    const bookData = useSelector((state) => state.books[id]);

    const onSubmit = (formValues) => {
        props.editBook(id, formValues);
        const res = new Response();
        if (res.status === 200) {
            nav('/book/added');
        };
    }

    return (
        <div>
            <BookForm title="Edit book:" initialValues={_.pick(bookData, "title", "author", "coverurl", "published")} onSubmit={onSubmit} />
        </div>
    );
};

export default connect(null, { editBook, fetchBook })(BookEdit);