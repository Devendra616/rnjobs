import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';

class AuthScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'blue' }}>
                <Text>AuthScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default AuthScreen;