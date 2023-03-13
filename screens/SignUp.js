import Logo from "../components/Logo";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Button from "../components/Button";
export default function SignUp({navigation}) {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
  
    return (
     
  
        <View style={styles.container}>
              <Logo
                path={require("../assets/logo.png")}
                width = {200}
                height = {200}
              />
              <StatusBar style="auto" /> 
              <Button
                title = "Go to make new account"
                onPress = {() => navigation.navigate("")}
              />
             
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
  