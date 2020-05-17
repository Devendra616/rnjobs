import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Slide from '../components/Slide';

const SLIDE_DATA = [
    {text:'Welcome to rn-Jobs', color:'#03A9F4'},
    {text:'Use this to get a job near your area', color:'#009688'},
    {text:'Set your location, then swipe away', color:'#03A9F4'}
];

class WelcomeScreen extends Component {

    onSlideComplete = () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Slide data={SLIDE_DATA} onComplete= {this.onSlideComplete} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default WelcomeScreen;