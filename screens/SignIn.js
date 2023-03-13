import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import Logo from '../assets/google.png'
import React, { useState } from 'react';
import Button from '../components/Button';
import colors from '../config/colors'



export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
        
      <StatusBar style="auto" />
      <View style = {styles.imageContainer}>
        <Image source = {require('../assets/google.png')} 
         />
      </View>
      <TextInput>
        placeholder="Email"
      </TextInput>
      <TextInput>
        placeholder="Password"
      </TextInput>

      <Button>
        title="Sign In"
        backgroundColor={colors.lightOrange}
      </Button>
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