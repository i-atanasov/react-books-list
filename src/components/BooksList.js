import React from "react";
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
                <div key={currentBook.id} className="ui container list raised segment" style={{ "boxShadow": `3px 6px 10px ${read}` }}>
                    <div className="item">
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