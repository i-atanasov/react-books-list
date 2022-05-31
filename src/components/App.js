import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import BooksList from './BooksList';
import BookAdd from './BookAdd';
import BookEdit from './BookEdit';
import BookDelete from './BookDelete';
import history from '../history';


const App = () => {
    return (
    <div>
        <Router history={history}>
            <Header />
                <Routes>    
                    <Route path='/' exact element={<BooksList />} />
                    <Route path='/books/add' exact element={<BookAdd />} />
                    <Route path='/books/edit' exact element={<BookEdit />} />
                    <Route path='/books/delete' exact element={<BookDelete />} />
                </Routes>
        </Router>
    </div>
    );
}

export default App;