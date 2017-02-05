import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: '<YOUR API KEY>',
            authDomain: '<YOUR AUTH DOMAIN>',
            databaseURL: '<YOUR DATABASE URL>',
            storageBucket: '<YOUR STORAGE BUCKET>',
            messagingSenderId: '<YOUR MESSAGING ID>'
        };

        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                Actions.main();
            }
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
