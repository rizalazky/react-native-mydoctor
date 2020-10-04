import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconAddPhoto, IconBackDark, IconBackLight, IconSendDark, IconSendLight } from '../../../assets'

const ButtonIcon = ({width,icon,onPress}) => {
    
    const Icon=()=>{
        if(icon==="back-dark"){
            return <IconBackDark/>
        }
        if(icon==="back-light"){
            return <IconBackLight/>
        }
        if(icon=="add-foto"){
            return <IconAddPhoto/>
        }

        return <IconBackDark/>
    }


    return (
        <TouchableOpacity style={styles.ButtonIcon(width)} onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    ButtonIcon:(width,disabled)=>({
        width:width,
    })
})
