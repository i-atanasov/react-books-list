import React from "react";
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
            return (
                <div key={currentBook.id} className="ui container list raised segment">
                    <div className="item">
                        <img className="ui image" alt={currentBook.title} src={currentBook.coverurl} style={{ width: '80px' }}/>
                        <div className="content">
                            <div className="header">
                                Title {currentBook.title}:
                            </div> 
                            <div className="description">
                                By {currentBook.author}, added on {currentBook.added}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return <div>{books}</div>
    }
};

export default BooksList;