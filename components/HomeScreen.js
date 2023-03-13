import React from "react";
import { TouchableHighlight, Text, StyleSheet} from 'react-native'

function HomeScreen({title, onPress, underlayColor, backgroundColor, navigation}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlayColor}
      style={[styles.button, {backgroundColor: backgroundColor}]}>
      <Text style={styles.text}>{title}</Text>

      <Button
      title="Go to Kong's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />

    // look into this documentation made by  reactNative
    //https://reactnative.dev/docs/navigation
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 100,
    fontWeight: 'bold',
    margin: 10,
    padding: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 2,
  },
  text: {
      fontWeight: 'bold',
      fontSize: 15,
  },

})
export default HomeScreen;