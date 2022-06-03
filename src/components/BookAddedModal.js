import React from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal";


class BookAddedModal extends React.Component {
   
    renderActions() {
        return (
            <React.Fragment>
                <Link className="ui primary button" to='/books/add'>Add Another</Link>
                <Link className="ui button" to='/'>Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return 'Book added successfully, choose what to do next:';
    }
    
    render() {
        return ( 
                <Modal 
                    title='Book added'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                />
        );
        }
}

export default BookAddedModal;