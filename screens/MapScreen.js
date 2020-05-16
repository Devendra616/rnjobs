import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';

class MapScreen extends Component {

    render() {
        return (
            <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'pink' }}>
                <Text>MapScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default MapScreen;