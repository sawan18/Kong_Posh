import React from 'react';
import { Image, StyleSheet} from "react-native";


function Logo({path, width, height}){
    return (
        <Image
            source = {path}
            style = {[styles.logo, {width: width}, {height: height}]}
        />
    )
}

const styles = StyleSheet.create({
    logo: {
        
    }
})

export default Logo