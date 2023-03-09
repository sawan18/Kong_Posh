import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Logo from './components/Logo'
import React, { useState } from 'react';




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
        onPress={() => navigation.push("SignUp")}
        title='Go to Third Screen'
      />
    </View>
     
    
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
