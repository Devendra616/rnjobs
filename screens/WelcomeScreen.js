import _ from 'lodash';
import React, { Component } from 'react';
import {View,Text, StyleSheet, AsyncStorage} from 'react-native';
import Slide from '../components/Slide';
import {AppLoading} from 'expo';

const STORAGE_KEY = '@fb_token'
const SLIDE_DATA = [
    {text:'Welcome to rn-Jobs', color:'#03A9F4'},
    {text:'Use this to get a job near your area', color:'#009688'},
    {text:'Set your location, then swipe away', color:'#03A9F4'}
];

class WelcomeScreen extends Component {
    
    state = {token:null};

    async UNSAFE_componentWillMount() {
        let token = await AsyncStorage.getItem(STORAGE_KEY);

        if(token) {
            this.props.navigation.navigate('Main', {screen: 'Map'});
            this.setState({token})
        } else {
            this.setState({token:false});
        }
    }

    onSlideComplete = () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        if(_.isNull(this.state.token)) {
           return <AppLoading />
        }

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