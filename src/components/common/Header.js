// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make a components
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        paddingTop: 20,
        height: 60,
        backgroundColor: '#F8F8F8',
        alignItems: 'center', // Horizontal alignment
        justifyContent: 'center', // Vertical alignment (flexDirection: 'column' by default)
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make component available
export { Header };
