import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../../../utils'

const IsMe = ({text,date}) => {

    return (
        <View style={styles.container}>
            <View style={styles.container_text}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

export default IsMe

const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-end",
        padding:16,
        alignSelf:"flex-end",
    },
    container_text:{
        backgroundColor:Colors.green2,
        padding:16,maxWidth:'70%',
        borderRadius:10,
        borderBottomRightRadius:0
    },
    text:{
        color:Colors.secondary,
        fontSize:14,
        fontFamily:Fonts.NunitoRegular
    },
    date:{
        fontFamily:Fonts.NunitoRegular,
        color:Colors.grey1,
        textAlign:"right"
    }
})
