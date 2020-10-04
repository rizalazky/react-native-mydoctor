import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../assets'
import { Colors } from '../../../utils'

const ButtonSendChat = ({disabled}) => {
    
    const Icon=()=>{
        if(!disabled){
            return <IconSendLight/>
        }
        
        return <IconSendDark/>
    }
    return (
        <View style={styles.container(disabled)}>
            <Icon/>
        </View>
    )
}

export default ButtonSendChat

const styles = StyleSheet.create({
    container:(disabled)=>({
        backgroundColor:!disabled? Colors.blue1:Colors.grey4  ,
        justifyContent:"center",
        alignItems:"center",
        width:45,
        height:45,
        borderRadius:10
    })
})
