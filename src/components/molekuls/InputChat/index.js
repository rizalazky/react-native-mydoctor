import React ,{useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = ({value,disabled,onChangeText,onPress}) => {
    return (
        <View style={styles.container}>         
            <TextInput placeholder='type text here...' 
                    style={styles.textInput}
                    value={value}
                    onChangeText={onChangeText}/>
            <Button type='send-chat' disabled={disabled} onPress={onPress}/>
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        paddingHorizontal:16
    },
    textInput:{
        borderWidth:1,
        borderColor:Colors.grey2,
        flex:1,
        borderStyle:"solid",
        backgroundColor:Colors.grey4,
        height:45,
        borderRadius:10,
        marginRight:10,
        paddingHorizontal:10
    }
})
