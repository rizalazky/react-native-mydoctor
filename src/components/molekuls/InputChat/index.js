import React ,{useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = () => {
    const [inputText,setInputText]=useState('')


    return (
        <View style={styles.container}>         
            <TextInput placeholder='type text here...' 
                    style={styles.textInput}
                    defaultValue={inputText} 
                    onChangeText={(e)=>setInputText(e)}/>
            <Button type='send-chat' disabled={inputText.length >= 1 ?false:true}/>
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
        marginRight:10
    }
})
