import React from 'react'
import { StyleSheet, Text,TouchableOpacity,View } from 'react-native'
import { Colors, Fonts } from '../../../utils'
import ButtonIcon from './ButtonIcon'
import ButtonSendChat from './ButtonSendChat'

export default function Button({type,title,onPress,icon,width,disabled}) {

    if(type ==="icon"){
        return <ButtonIcon icon={icon} width={width} onPress={onPress} disabled={disabled}/>
    }
    
    if(type === 'send-chat'){
        return <ButtonSendChat disabled={disabled} onPress={onPress}/>
    }

    if(disabled){
        return(
            <View style={styles.disabled}>
                <Text style={styles.ButtonText(type)}>{title}</Text>
            </View>
        )
    }

    return (
        <TouchableOpacity style={styles.Button(type)} onPress={onPress}>
            <Text style={styles.ButtonText(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    disabled:{
        backgroundColor:Colors.grey1,
        paddingVertical:10,
        borderRadius:10, 
    },
    Button:(type)=>({
      backgroundColor:type !== "secondary"?Colors.primary:Colors.white,
      paddingVertical:10,
      borderRadius:10,  
    }),
    ButtonText:(type)=>({
        textAlign:"center",
        color:type !== "secondary"?Colors.white:Colors.black,
        fontSize:16,
        fontFamily:Fonts.NunitoSemiBold
    })
})
