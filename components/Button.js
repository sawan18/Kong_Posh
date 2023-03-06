import React from 'react';
import { Text, StyleSheet, Pressable} from 'react-native';

function Button({title, onPress, color}){
    return (
        <Pressable onPress={onPress} style={[styles.button, {backgroundColor: color}]}>
            <Text>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100, 
        height: 60
    }, 
    text: {
        fontSize: 16,
        color: 'black'
    }
})
export default Button;