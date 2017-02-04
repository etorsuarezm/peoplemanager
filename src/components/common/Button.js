import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',  // Thickness of the font
        paddingTop: 10,
        marginBottom: 10
    },
    buttonStyle: {
        flex: 1,  // Expand and fill all the content available
        alignSelf: 'stretch',  // Stretch to fill the limits of the container
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 10,
        marginRight: 5
    }
};

export { Button };
