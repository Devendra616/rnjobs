import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';

class DeckScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#44a342' }}>
                <Text>DeckScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default DeckScreen;