import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Logo from './components/Logo'
import Button from './components/Button'
import { NavigationContainer } from "@react-navigation/native";
import {createAppContainer} from 'react-navigation'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SignIn} from './screens/SignIn'
import {SignUp} from './screens/SignUp'


export default function App() {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Logo
        path={require("./assets/logo.png")}
        width = {200}
        height = {200}
      />
      <StatusBar style="auto" /> 
     <Button 
        title='Go to Third Screen'
        onPress={() => this.props.navigation.navigate("SignUp")}
      />
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="SignIn"
          component={SignIn}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen 
          name="Third"
          component={ThirdScreen}
          //options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
