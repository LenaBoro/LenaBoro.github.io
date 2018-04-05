import React from 'react';
import { Route, Router } from 'react-router';

import App from './components/App';
import Card from './components/Card';

export default (
    <App>
        <Route exat={true} path="/" component={App}/>
        <Route path="/about" component = {About}/>
        <Route path="/card/:id" component = {Card}/>
    </App>
    );