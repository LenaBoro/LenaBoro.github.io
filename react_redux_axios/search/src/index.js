import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//redux router
import { Provider} from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import configureStore from './store/configureStore';
import {loadSerials } from './actions/serialsAction';
import rootReducers from './reducers/rootReducer';
//components
import App from './components/App';
import About from './components/About';
import Card from './components/Card';
import CardId from './components/Card_Id';

//
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';


const history = createHistory();

if (module.hot) {
    module.hot.accept(rootReducers, () => {
        const nextRootReducer = require(rootReducers)
        store.replaceReducer(nextRootReducer)
    });
}

let currentValue;
function handleChange() {
    let previousValue = currentValue;
    currentValue = store.getState().nameReducer;
    if (previousValue !== currentValue) {
        store.dispatch(loadSerials(store.getState().nameReducer));
    }
}

const store = configureStore();
store.dispatch(loadSerials(store.getState().nameReducer));
store.subscribe(handleChange);

//router
const router = (
    <Router>
        <Route exact path="/" component = {App} />
        <Route path="/about" component = {About} />
        <Route path="/card/:id" component = {Card}/>
    </Router>
);

ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                    <Switch>
                           <Route exact path="/" component = {App} />
                           <Route path="/about" component = {About} />
                           <Route path="/:cardId" component = {CardId}/>
                    </Switch>
            </ConnectedRouter>
        </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
