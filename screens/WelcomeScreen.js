import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';

class WelcomeScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'red' }}>
                <Text>WelcomeScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default WelcomeScreen;