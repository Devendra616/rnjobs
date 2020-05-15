import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';


class App extends Component {
  render() {
    const Tab = createBottomTabNavigator();

    return (     
       <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Welcome"
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
        >
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarLabel: 'Home',            
          }}
        />
        <Tab.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            tabBarLabel: 'Updates',            
          }}
        />
        </Tab.Navigator>
        </NavigationContainer>     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;