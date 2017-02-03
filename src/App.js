import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


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
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                    <View>
                        <Text>
                            Hello!
                        </Text>
                    </View>
            </Provider>
        );
    }
}

export default App;
