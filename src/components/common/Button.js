import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) => {
    const {
        buttonStyle,
        buttonTextStyle
    } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle:{
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#464646',
        borderRadius: 10,
        alignSelf: 'stretch',
        flex: 1
    },
    buttonTextStyle:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }

}

export {Button};