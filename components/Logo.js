import React from 'react';
import { Image} from "react-native";


function Logo({path, width, height}){
    return (
        <Image
            source = {path}
            style = {[{width: width}, {height: height}]}
        />
    )
}


export default Logo