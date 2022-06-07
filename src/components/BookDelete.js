import React from "react";
import { connect } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { deleteBook, fetchBook, fetchBooks } from "../actions";
import Modal from "./Modal";
 
const BookDelete = (props) => {
    const { id } = useParams();
    const nav = useNavigate();
    const bookData = useSelector((state) => state.books[id]);

    const renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => {
                    props.deleteBook(id);
                    const res = new Response();
                
                    if (res.status === 200) {
                        nav('/book/deleted');
                    };
                }
                } className="ui primary button">Delete</button>
                <Link className="ui button" to='/'>Cancel</Link>
            </React.Fragment>
        );
    }

    const renderContent = () => {
        if (!bookData) {
            return 'Are you sure you want to delete this book?'
        }

        return `Are you sure you want to delete book with title ${bookData.title}?`
    }

    return ( 
        <Modal 
            title='Delete book'
            content={renderContent()}
            actions={renderActions()}
            onDismiss={() => nav('/books/my')}
        />
    );

};
 

export default connect(null, { deleteBook, fetchBook, fetchBooks })(BookDelete);
