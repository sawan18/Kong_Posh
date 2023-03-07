import { StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons'

function Icon({name, size, color}) {
    return (
        <Entypo
            name={name}
            size={size}
            style={[styles.icon, {color: color}]}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 40, 
        height: 40
    }
})

export default Icon