import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import {clearLikedJobs} from '../actions';

class SettingScreen extends Component {

    render() {
        return (
            <View>
                <Button 
                    title="Reset Liked Jobs"
                    large
                    icon={{name:'delete-forever', color:'white'}}                    
                    buttonStyle={{backgroundColor:"#F44336"}}
                    onPress={this.props.clearLikedJobs }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default connect(null,{clearLikedJobs})(SettingScreen);