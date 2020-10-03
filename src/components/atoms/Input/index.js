import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { Colors } from '../../../utils'

const Input = ({label,placeholder}) => {
    return (
        <View style={styles.Input}>
            <Text style={styles.Input__Label}>{label}</Text>
            <TextInput placeholder={placeholder} style={styles.Input__TextInput}/>
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
    Input__TextInput:{
        borderWidth:1,
        borderStyle:"solid",
        borderColor:Colors.grey2,
        borderRadius:10,
        padding:10
    }
})
