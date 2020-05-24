import React, { Component } from 'react';
import {View,Text, StyleSheet,ScrollView, Linking} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import moment from 'moment';

class ReviewScreen extends Component {

    renderLikedJobs() {
        return this.props.likedJobs.map( job => {
            const {title, created_at,company, url, id} = job;
            const duration = moment(created_at).fromNow();
            return (
                <Card title={title} key={id}>
                    <View style={{height:200}}>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{duration}</Text>
                        </View>
                        <Button 
                            title="Apply Now!"
                            backgroundColor='#03A9F4'
                            onPress={ ()=> Linking.openURL(url)}
                        />
                    </View>
                </Card>
            );
        });
    }
   
    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    detailWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10
    },
    italics:{
        fontStyle:'italic'
    }
});

function mapStateToProps(state) {
    return {likedJobs: state.likedJobs};
}

export default connect(mapStateToProps)(ReviewScreen);