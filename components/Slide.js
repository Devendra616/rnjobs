import React, { Component } from 'react'
import {View, Text,ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH= Dimensions.get('window').width;
class Slide extends Component {

    // Show button on last slide
    renderButton(index) {
        if(index === this.props.data.length -1) {
            return (
                <View style={{marginTop:15}}>
                    <Button title='Onwards!' raised 
                    buttonStyle={styles.button} 
                    onPress={this.props.onComplete}
                    />
                </View>
            )
        }
    }

    renderSlides() { 
       return this.props.data.map( (slide, index)=> {
           return (<View key={slide.text} style={[styles.slide,{backgroundColor: slide.color}]} >
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {this.renderButton(index)}
                    </View>);           
        })
    }

    render() {
        return (
            <ScrollView 
                horizontal
                pagingEnabled
                style={{flex:1}}
            >
            {this.renderSlides()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:SCREEN_WIDTH       
    },
    slideText: {
        fontSize:30,
        color:'white',
        textAlign:'center'
    },
    button:{
        backgroundColor:'#0288D1',        
    }
});

export default Slide;