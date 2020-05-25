import React, { Component } from 'react';
import {View,Text, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import MapView ,{ PROVIDER_GOOGLE }  from 'react-native-maps';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import * as actions from '../actions';

const MAP_API_KEY='AIzaSyB3e5mqiIBJ2HQllzK4x0d2hykLw3qiLC8'; //From google map
class MapScreen extends Component {

    state = {
        region :{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            },
        isMapLoaded:false   
    }
    componentDidMount() {
        this.setState({isMapLoaded:true});
    }

    onRegionChangeComplete= (region) => {
        this.setState({region})
    }

    onSearch = () => {
        this.props.fetchJobs(this.state.region, ()=> {
            // callback navigate to myjobs
            this.props.navigation.navigate('Main', {screen: 'Deck'});
        });
    }

    render() {
        if(!this.state.isMapLoaded) {
            return (
                <View style={styles.container} >
                    <ActivityIndicator size='large' />
                </View>
            )
        }

        return (
            <View  style={styles.container}>
                <MapView style={styles.mapStyle} 
                    provider={ PROVIDER_GOOGLE }
                    region={this.state.region} 
                    apiKey={MAP_API_KEY}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View styles={styles.buttonContainer}>
                    <Button 
                        title="Search This Area"
                        backgroundColor="#009688"
                        large
                        icon={{name:'search', color:'white'}}
                        onPress={this.onSearch}
                        apiKey={MAP_API_KEY}
                        backgroundColor='red'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",       
        backgroundColor:'pink'
      },
      mapStyle: {
        flex:1,
        width: '100%',
        height: '100%',
      },
      buttonContainer : {
        position:'absolute',
        left:0,
        right:0,
        alignSelf:'flex-end'        
      }
});

export default connect(null, actions)(MapScreen);