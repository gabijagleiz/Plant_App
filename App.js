import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import FirstPage from './FirstPage';
import MyPlants from './MyPlants';
import WelcomeScreen from './WelcomeScreen';
import SignIn from './SignIn';
import { PlantProvider } from './plantContext';
import { firebase } from './firebase';


const Stack = createStackNavigator();


export default function App() {
  return (
    <PlantProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=" " component={WelcomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="MyPlants" component={MyPlants} />
        </Stack.Navigator>
      </NavigationContainer>
    </PlantProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

});

