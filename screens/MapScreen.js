import React, { Component } from 'react';
import {View,Text, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';




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
                    region={this.state.region} 
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'pink'
      },
      mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});

export default MapScreen;