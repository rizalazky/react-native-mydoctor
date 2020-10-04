import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header,InputChat,ChatItem} from '../../components'
import { Colors, Fonts } from '../../utils'

const Chatting = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header type='header-profile' onPress={()=>navigation.goBack()}/>
            <Text style={styles.date}>Senin,21 Maret 2020</Text>
            <View style={styles.container__chat}>
                <ChatItem isMe/>
                <ChatItem/>
                <ChatItem isMe/>
            </View>
            <InputChat/>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        flex:1,
        paddingBottom:20
    },
    container__chat:{
        flex:1
    },
    date:{
        marginTop:20,
        textAlign:"center",
        fontSize:14,
        fontFamily:Fonts.NunitoRegular,
        color:Colors.grey3,

    }
})
