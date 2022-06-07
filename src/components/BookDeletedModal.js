import React from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal";


class BookDeletedModal extends React.Component {
   
    renderActions() {
        return (
            <React.Fragment>
                <Link className="ui primary button" to='/books/my'>Ok</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return 'Book deleted successfully, return to My Books:';
    }
    
    render() {
        return ( 
                <Modal 
                    title='Book deleted'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                />
        );
        }
}

export default BookDeletedModal;