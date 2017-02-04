import React from 'react';
import { View, Modal, ActivityIndicator, Text } from 'react-native';

const LoadingFullScreen = ({ spinnerSize, opacity, backgroundColor, text }) => {
    return (
        <Modal transparent>
            <View 
                style={{
                    flex: 1,
                    opacity: opacity || 0.5,
                    backgroundColor: backgroundColor || '#000',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ActivityIndicator size={spinnerSize || 'large'} />
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </Modal>
    );
};

const styles = {
    textStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10
    }
};

export default LoadingFullScreen;
