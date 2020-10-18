import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { Colors } from '../../../utils'

const Input = ({label,placeholder,onChangeText,value}) => {

    const [border,setBorder]=useState(Colors.grey2)
    const onFocus=()=>{
        setBorder(Colors.blue1)
    }

    const onBlur=()=>{
        setBorder(Colors.grey2)
    }
    return (
        <View style={styles.Input}>
            <Text style={styles.Input__Label}>{label}</Text>
            <TextInput placeholder={placeholder} value={value}
                onChangeText={onChangeText}
                onFocus={onFocus} onBlur={onBlur} style={styles.Input__TextInput(border)}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    Input:{
        height:73,
        marginVertical:10
    },
    Input__Label:{
        color:Colors.grey1,
        marginBottom:10
    },
    Input__TextInput:(border)=>({
        borderWidth:1,
        borderStyle:"solid",
        borderColor:border,
        borderRadius:10,
        padding:10
    })
})
