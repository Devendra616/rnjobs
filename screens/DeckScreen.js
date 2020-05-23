import React, { Component } from 'react';
import {View,Text, StyleSheet, Platform} from 'react-native';
import Swipe from '../components/Swipe';
import {Button, Card,} from 'react-native-elements';
import MapView ,{ PROVIDER_GOOGLE }  from 'react-native-maps';
import {connect} from 'react-redux';
import moment from 'moment';

const SNIPPET_LENGTH=100;
class DeckScreen extends Component {

    renderCard(job){
        // Shortens the description to snippet
        const shortenString= (text)=>{
            let trimmedString = "";
            //Trim and re-trim only when necessary (prevent re-trim when string is shorted than maxLength, it causes last word cut) 
            if(text.length > trimmedString.length){
                //trim the string to the maximum length
                trimmedString = text.substr(0, SNIPPET_LENGTH);

                //re-trim if we are in the middle of a word and 
                trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            }
            return trimmedString;
            }

        let {title, created_at,company, description,location} = job;
        
        description = shortenString(description);
        const duration = moment(created_at).fromNow();
        console.log(created_at+"****"+duration);
        // Sanitize any html elements like <b></b><p></p><li></li>
        const summary = description.replace(/<b>/g,'')
                                   .replace(/<\/b>/g,'')
                                   .replace(/<p>/g,'')
                                   .replace(/<\/p>/g,'')
                                   .replace(/<strong>/g,'')
                                   .replace(/<\/strong>/g,'')
                                   .replace(/<ul>/g,'')
                                   .replace(/<\/ul>/g,'')
                                   .replace(/<li>/g,'')
                                   .replace(/<\/li>/g,'')
                                   .replace(/<ol>/g,'')
                                   .replace(/<\/ol>/g,'');   
        /* show when lat and long is obtained in job result 
        const initialRegion = {
            longitude:job.longitude,
            latitude:job.latitude,
            latitudeDelta:0.045,
            longitudeDelta:0.02
        }    */

        return (
            <Card title={title}>
                <View style={{height:300}}>
                    <MapView
                        scrollEnabled={false}
                        style={{flex:1}}
                        cacheEnabled={Platform.OS === 'android'?true:false}
                        //initialRegion={initialRegion}
                    />                                  
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{company}</Text>
                    <Text>{duration}</Text>
                </View>
                <Text>{summary}</Text>
            </Card>
        )
    }

    

    renderNoMoreCards() {
        return(
            <Card title="No more jobs">

            </Card>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Swipe 
                    data={this.props.jobs}
                    renderCard = {this.renderCard}
                    renderNoMoreCards = {this.renderNoMoreCards}
                />
            </View>
        )
    }
}

// state at reducers->index.js has auth and jobs
function mapStateToProps({jobs}) {
       return {jobs};
}

const styles = StyleSheet.create({
    detailWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
});

export default connect(mapStateToProps,null)(DeckScreen);