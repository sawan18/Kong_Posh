import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Logo from './components/Logo'
import Button from './components/Button'
import {HomeScreen } from './components/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import {createAppContainer} from 'react-navigation'; 
import {SignIn} from './screens/SignIn'
import {SignUp} from './screens/SignUp'

const Stack = createNativeStackNavigator();

export default function App( {navigation}) {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  
  // Making a change to test

  return (
  

   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen>
        name="Home"
        component={HomeScreen}
        options={{title: "Welcome"}}
      </Stack.Screen>
      <Stack.Screen>
        name="SignUp"
        component={SignUp}
      </Stack.Screen>
      <Stack.Screen>
        name="SignIn"
        component={SignIn}
      </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
    
    
    
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
