import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
export default function Confirmation() {

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
  

