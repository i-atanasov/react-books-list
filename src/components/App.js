import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import BooksList from './BooksList';
import BookAdd from './BookAdd';
import BookEdit from './BookEdit';

const App = () => {
    return (
    <div>
        <Header />
        <BooksList />
        <BookAdd />
        <BookEdit />
    </div>
    );
}

export default App;