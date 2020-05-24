import React, { Component } from 'react';
import {PanResponder, View, Animated, 
        StyleSheet, Dimensions,
        UIManager,LayoutAnimation } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPEOUT_DURATION= 250; //millisec
//min amount of dragging reqd to like or dislike card, before reset to original position
const SWIPE_THRESHOLD = SCREEN_WIDTH*.25; 
class Swipe extends Component {
    // To avoid throwing errorn. Called when no props with that name is passed
    static defaultProps = {
        onSwipeRight : () => {},
        onSwipeLeft : () => {}
    }

    constructor(props){
        super(props);

        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderMove: (event,gesture)=> {
                position.setValue({x:gesture.dx, y:gesture.dy})
            },
            onPanResponderRelease:(event,gesture)=>{
                if(gesture.dx > SWIPE_THRESHOLD) {
                    //swipe right
                    this.forceSwipe('right');
                } else if(gesture.dx < SWIPE_THRESHOLD) {
                    //swipe left
                    this.forceSwipe('left');
                } else {
                    //reset card if swipped very little
                    this.resetPosition();
                }
            }
        });

        this.state={position,panResponder, currentIndex:0};
    }

    // Update index if new data has arrived
    componentWillReceiveProps(nextProps) {
        if(nextProps.data !== this.props.data) {
            this.setState({currentIndex:0});
        }
    }

    // smooth animation of cards to lift up when cards moved top
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    // Animates card to the right/left of screen
    forceSwipe(direction) {
        const x=direction === 'right'? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            duration:SWIPEOUT_DURATION,
            toValue: {x, y:0}
        }).start( () => this.onSwipeCompletion(direction));
    };
    
    //callback function of forceSwipe
    onSwipeCompletion(direction) {
        const {onSwipeLeft, onSwipeRight, data} = this.props;
        const currentItem = data[this.state.currentIndex];

        direction=== 'right'? onSwipeRight(currentItem) : onSwipeLeft(currentItem);
        this.setState( {currentIndex: this.state.currentIndex+1});
        this.state.position.setValue({x:0,y:0});
    }
        
    //reset card to 0 position
    resetPosition() {
        Animated.spring(this.state.position,{
            toValue: {x:0,y:0}
        }).start();
    }

    getCardStyle() {
        const {position} = this.state;
        // interpolate is modifying one or more property on some input       
        const rotate = position.x.interpolate({
            inputRange:[-SCREEN_WIDTH*1.5,0,SCREEN_WIDTH*1.5],
            outputRange:['-120deg','0deg','120deg']
        })

        return {
            ...position.getLayout(),
            transform:[{rotate}]
        }
    }

    renderCards() { 
        // if last card is already swapped        
        if(this.state.currentIndex >= this.props.data.length) {
            return this.props.renderNoMoreCards();
        }
        
        const deck = this.props.data.map((item,index) =>{
            //If card is already swipped right/left then don't show them
            if(index < this.state.currentIndex) {
                return null;
            }

            //make only top card dragable, attach handler to currentCard
            if(index=== this.state.currentIndex) {
               return (<Animated.View 
                        key={item.id}
                        style={ [ this.getCardStyle(),styles.cardStack]}  
                        {...this.state.panResponder.panHandlers}
                        >
                        {this.props.renderCard(item)}
                        </Animated.View>);
            }
            
            //other items down the list, make them just card
            return (
                    <Animated.View style={[styles.cardStack,{top:10*(index-this.state.currentIndex), zIndex:-index}]} 
                                    key={item.id}>
                        {this.props.renderCard(item)}
                    </Animated.View>
                    );
                }).reverse();
        return deck;
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardStack:{
        position:'absolute',
        width:SCREEN_WIDTH,
        zIndex:100
    }
})

export default Swipe;