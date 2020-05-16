import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';

class SettingScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#c324' }}>
                <Text>SettingScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default SettingScreen;