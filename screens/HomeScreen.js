import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
export default function HomeScreen({navigation}) {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
  
    return (
     
  
        <View style={styles.container}>
          <Text
            This is home page
          />
              <Logo
                path={require("./assets/logo.png")}
                width = {200}
                height = {200}
              />
              <Button
                title = "Press to access existing account"
                onPress = {() => navigation.navigate("SignIn")}
              />
              <Button
                title = "Press to make new account"
                onPress={() => navigation.navigate("SignUp")}
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
  