import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextBox = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { textBoxStyle, labelStyle, containerStyle } = styles;
    return (
    <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                value={value}
                placeholder={placeholder}
                autoCorrect={false}
                onChangeText={onChangeText}
                style={textBoxStyle}
            />
        </View>
    );
};

const styles = {
    textBoxStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3  // 2/3 will be allocated to the TextBox
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1  // 1/3 will be allocated to the Label
    },
    containerStyle: {
        height: 40,
        flex: 1, // Fill up all the space available
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { TextBox };
