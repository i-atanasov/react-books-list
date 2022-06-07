import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBooks } from "../actions";

class MyBooksList extends React.Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    renderAdminButtons(book) {
        if (book.userId === this.props.currentUserId && book.userId) {
            return (
                <div className="right floated content" style={{ "marginTop": "10px" }}>
                    <Link className="ui inverted secondary button" to={`/books/edit/${book.id}`}>
                        <i className="ui edit icon"></i>Edit
                    </Link>
                    <Link className="ui inverted red button" to={`/books/delete/${book.id}`}>
                        <i className="ui delete icon"></i>Delete
                        </Link>
                </div>
            );
        }
    }

    render() {
        const books = this.props.books.map((currentBook) => {
            if (currentBook.userId === this.props.currentUserId && currentBook.userId) {
            
                    const renderImage = () => {
                        return currentBook.coverurl ?
                                    <img className="ui image" alt={currentBook.title} src={currentBook.coverurl} style={{ width: "80px" }}/> :
                                    <img className="ui image" alt={currentBook.title} src="https://storage.googleapis.com/webdesignledger.pub.network/LaT/edd/2016/02/old-book-cover-texture-15.jpg" style={{ width: "80px" }}/>

                    }

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
                                    {renderImage()}
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
            }

            
        });

        return <div>{books}</div>
    }
};

const mapStateToProps = (state) => {
    return { 
        isSignedIn: state.auth.isSignedIn,
        currentUserId: state.auth.userId,
        books: Object.values(state.books)
    };
};

export default connect(mapStateToProps, { fetchBooks })(MyBooksList);