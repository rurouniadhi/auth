import React, { Component } from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';

class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDpSarHb0T6BCqf3zBa_Zrx6oUamI1pNEg",
            authDomain: "auth-94d30.firebaseapp.com",
            databaseURL: "https://auth-94d30.firebaseio.com",
            projectId: "auth-94d30",
            storageBucket: "auth-94d30.appspot.com",
            messagingSenderId: "941494524325"
          });
    }
    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                <Text>AN appp</Text>
            </View>
        );
    }
}

export default App;