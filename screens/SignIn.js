import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Logo from '../assets/google.png'
import React, { useState } from 'react';


export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.imageContainer}>
        <Image source = {require('../assets/google.png')} 
         />
      </View>
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
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});