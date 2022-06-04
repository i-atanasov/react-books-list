import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBooks } from "../actions";
import books from "../api/books";

class BooksList extends React.Component {
    state = { books: [] };

    componentDidMount() {
        const fetchBooks = async () => {
            const res = await books.get('/books');
            this.setState({ books: res.data });

        };

        fetchBooks();
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
        } else {
            return (
                <div className="right floated button" style={{ "marginTop": "10px" }}>
                    <Link className="ui inverted green button" to={`/books/add/${book.id}`}>
                        <i className="ui add icon"></i>Add
                    </Link>
                    <p></p>

                </div>
            )
        }
    }

    render() {
        const books = this.state.books.map((currentBook) => {
            const renderImage = () => {
                return currentBook.coverurl ?
                            <img className="ui image" alt={currentBook.title} src={currentBook.coverurl} style={{ width: "80px" }}/> :
                            <img className="ui image" alt={currentBook.title} src="https://storage.googleapis.com/webdesignledger.pub.network/LaT/edd/2016/02/old-book-cover-texture-15.jpg" style={{ width: "80px" }}/>

            }

        let read = '';    
            if (currentBook.userId === this.props.currentUserId) {
                read = currentBook.read ? 'lightgreen' : '#FFFF99';
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
        });

        return <div>{books}</div>
    }
};

const mapStateToProps = (state) => {
    return { 
        currentUserId: state.auth.userId, 
    };
};

export default connect(mapStateToProps, { fetchBooks })(BooksList);