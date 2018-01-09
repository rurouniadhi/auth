import React, { Component } from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDpSarHb0T6BCqf3zBa_Zrx6oUamI1pNEg",
            authDomain: "auth-94d30.firebaseapp.com",
            databaseURL: "https://auth-94d30.firebaseio.com",
            projectId: "auth-94d30",
            storageBucket: "auth-94d30.appspot.com",
            messagingSenderId: "941494524325"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent(){
        switch (this.state.loggedIn){
            case true:
            return(
                <CardSection>
                    <Button>
                        Log Out
                    </Button>
                </CardSection>
            );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;