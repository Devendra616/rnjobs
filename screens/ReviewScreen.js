import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

class ReviewScreen extends Component {
   
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#22f' ,margin: 20 }}>
                <Text>ReviewScreen2</Text>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default ReviewScreen;