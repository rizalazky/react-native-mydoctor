import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { List } from '../../components'
import { Colors, Fonts } from '../../utils'

const Messages = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Messages</Text>
                <List/>
                <List/>
                <List/>
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.secondary,
        flex:1
    },
    content:{
        paddingVertical:30,
        backgroundColor:Colors.white,
        flex:1,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    text:{
        marginBottom:16,
        marginLeft:16,
        color:Colors.dark1,
        fontFamily:Fonts.NunitoBold,
        fontSize:20
    }
})
