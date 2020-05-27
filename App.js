import React, { Component, } from 'react';
import { StyleSheet,Platform } from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './store';

import {Button, Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingScreen';
import Constants from "expo-constants";
import { PersistGate } from 'redux-persist/integration/react';
import {AppLoading} from 'expo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function mainContainerNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize:12},        
        labelPosition:'below-icon'
      }}
    >
      <Tab.Screen name="Map" 
                  component={MapScreen} 
                  options={{
                    tabBarLabel:'Map',
                    tabBarIcon:({color, size}) => {
                      return <Icon name="my-location" size={size} color={color} />
                    }
                  }}                  
                  />
      <Tab.Screen name="Deck" 
                  component={DeckScreen} 
                  options={{
                    tabBarLabel:'Jobs',
                    tabBarIcon:({color, size}) => {
                      return <Icon name="description" size={size} color={color} />
                    }
                  }}
                  />
      <Tab.Screen name="Review Jobs" 
                  component={ReviewNavigator} 
                  options={{
                    tabBarLabel:'Review Jobs',
                    tabBarIcon:({color, size}) => {
                      return <Icon name="favorite" size={size} color={color} />
                    }
                  }}  
                  />
    </Tab.Navigator>
  )
}

function ReviewNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Review" 
                    component={ReviewScreen}  
                    options={({ navigation,  }) => ({
                      title:'Review Jobs',
                      headerTitle:'Review',   
                                         
                      headerRight: () => (
                        <Button title="Setting" 
                          titleStyle={{  color: "rgba(0,122,255,1)", }}
                          buttonStyle={{backgroundColor:'transparent'}}
                          onPress={() => navigation.navigate('Setting')}                                              
                        />
                      ),
                      
                    })}                            
                    />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  )
}

function MainNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Main" component={mainContainerNavigator} />
     
    </Stack.Navigator>
  )
}


class App extends Component { 
  render() {    
    //const myStore = getStore();
    return (   
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <NavigationContainer>
              <MainNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
  },
  
});

export default App;