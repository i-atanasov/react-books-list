import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import BooksList from './BooksList';
import BookAdd from './BookAdd';
import BookEdit from './BookEdit';
import BookDelete from './BookDelete';
import BookAddedModal from './BookAddedModal';
import MyBooksList from './MyBooksList';
import BookDeletedModal from './BookDeletedModal';

const App = () => {
    return (
    <div>
        <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<BooksList />} />
                    <Route path='/books/my' element={<MyBooksList />} />   
                    <Route path='/books/add' element={<BookAdd />} />
                    <Route path="/books/add/:id" element={<BookAdd />} />
                    <Route path='/books/edit/:id' element={<BookEdit />} />
                    <Route path='/books/delete/:id' element={<BookDelete />} />
                    <Route path='/book/added' element={<BookAddedModal />} />
                    <Route path='/book/deleted' element={<BookDeletedModal />} />
                </Routes>
                <hr style={{ "marginTop": "20px" }}></hr>
            <footer><br /></footer>
        </Router>
    </div>
    );
}

export default App;