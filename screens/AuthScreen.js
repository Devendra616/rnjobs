import React, { Component } from 'react';
import {View,Text, StyleSheet, } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
    
    componentDidMount(){
        this.props.facebookLogin(); 
        this.onAuthComplete(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if(props.token) {
            //console.log(props);            
            this.props.navigation.navigate('Main', {screen: 'Map'});
        }
    }
    
    
    render() {
        return (
            <View />            
        )
    }
}

function mapStateToProps({auth}) {
    return {token:auth.token};
}

const styles = StyleSheet.create({
    
});

export default connect(mapStateToProps, actions )(AuthScreen);