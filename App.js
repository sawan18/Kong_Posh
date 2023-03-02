import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
