import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Logo from './components/Logo'
import React, { useState } from 'react';
import { StackActions } from '@react-navigation/native';

import Cart from './screens/Cart';
import Confirmation from './screens/Confirmation';
import Drinks from './screens/Drinks';
import Favorites from './screens/Favorites';
import Home from './screens/Home';
import Item from './screens/Item';
import Meals from './screens/Meals';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Snacks from './screens/Snacks';
import Surprise from './screens/SurpriseMe';


export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        onPress={() => navigation.push("SignUp")}
      />
    </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'left',
  },
});
