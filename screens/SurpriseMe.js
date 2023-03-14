import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
export default function SurpriseMe() {

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
  