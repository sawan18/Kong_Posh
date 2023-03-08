import React from "react";
import { TouchableHighlight, Text, StyleSheet} from 'react-native'

function Button({title, onPress, underlayColor, backgroundColor}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlayColor}
      style={[styles.button, {backgroundColor: backgroundColor}]}>
      <Text style={styles.text}>{title}</Text>
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
export default Button;