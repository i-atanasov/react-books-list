import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import BooksList from './BooksList';
import BookAdd from './BookAdd';
import BookEdit from './BookEdit';
import BookDelete from './BookDelete';
import BookAddedModal from './BookAddedModal';
import history from '../history';


const App = () => {
    return (
    <div>
        <Router history={history}>
            <Header />
                <Routes>    
                    <Route path='/' element={<BooksList />} />
                    <Route path='/books/add' element={<BookAdd />} />
                    <Route path='/books/edit' element={<BookEdit />} />
                    <Route path='/books/delete' element={<BookDelete />} />
                    <Route path='/book/added' element={<BookAddedModal />} />
                </Routes>
                <hr style={{ "marginTop": "20px" }}></hr>
            <footer><br /></footer>
        </Router>
    </div>
    );
}

export default App;