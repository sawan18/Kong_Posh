import React from 'react';
import { Image} from "react-native";


function Picture({path, width, height}){
    return (
        <Image
            source = {path}
            style = {[{width: width}, {height: height}]}
        />
    )
}


export default Picture