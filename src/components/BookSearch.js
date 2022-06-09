import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { searchBooks, resetSearch } from "../actions";

class BookSearch extends React.Component {
    
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.resetSearch();
        this.props.searchBooks(this.searchTerm);
    }

    onInput = (e) => {
        this.searchTerm = e.target.value
    }

    renderAdminButtons(currentBook) {

        if (currentBook.userId === this.props.currentUserId && currentBook.userId) {
            return (
                <div className="right floated content" style={{ "marginTop": "10px" }}>
                    <Link className="ui inverted secondary button" to={`/books/edit/${currentBook.id}`}>
                        <i className="ui edit icon"></i>Edit
                    </Link>
                    <Link className="ui inverted red button" to={`/books/delete/${currentBook.id}`}>
                        <i className="ui delete icon"></i>Delete
                        </Link>
                </div>
            );
        } else {
            
            return (
                <div className="right floated button" style={{ "marginTop": "10px" }}>
                    <Link className="ui inverted green button" to={`/books/add/${currentBook.id}`}>
                        <i className="ui add icon"></i>Add
                    </Link>
                    <p></p>

                </div>
            )
        }
    }

    renderImage = (currentBook) => {
        return currentBook.coverurl ?
                    <img className="ui image" alt={currentBook.title} src={currentBook.coverurl} style={{ width: "80px" }}/> :
                    <img className="ui image" alt={currentBook.title} src="https://storage.googleapis.com/webdesignledger.pub.network/LaT/edd/2016/02/old-book-cover-texture-15.jpg" style={{ width: "80px" }}/>
    }

    renderList() {
        return this.props.foundBooks.map(currentBook => {
            let read = '';    
            if (currentBook.userId === this.props.currentUserId) {
                read = currentBook.read ? 'lightgreen' : 'tomato';
            } else {
                read = '#99CCFF';
            }
            return (
                <div key={currentBook.id} className="ui relaxed container raised list segment" style={{ "borderRight": `5px solid ${read}` }}>
                    <div className="item">
                        {this.renderAdminButtons(currentBook)}
                        {this.renderImage(currentBook)}
                        <div className="content">
                            <div className="header">
                                {currentBook.title}
                            </div> 
                            <div className="description">
                                By {currentBook.author}  <br/>
                                Added on {currentBook.dateAdded} by {currentBook.userName}<br/>
                                First published: {currentBook.published} <br/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }


    render() {
        return (
        <div className="ui segment container">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search for a book:</label>
                        <div className="ui icon input">
                            <input 
                                type="text" 
                                placeholder="Search..."                             
                                onChange={this.onInput}
                            />
                            <i className="circular search link icon"></i>
                        </div>
                    </div>
                    <button type="submit" className="ui field inverted secondary button">Submit</button>

                </form>
            <div>

            </div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        isSignedIn: state.auth.isSignedIn,
        currentUserId: state.auth.userId,
        books: Object.values(state.books),
        foundBooks: Object.values(state.search)
    };
};

export default connect(mapStateToProps, { searchBooks, resetSearch } )(BookSearch);