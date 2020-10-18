import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Gap } from '..'
import { Colors, Fonts } from '../../../utils'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={Colors.primary} size='large'/>
            <Gap height={20}/>
            <Text style={styles.text_loading}>Loading</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        flex:1,
        backgroundColor:Colors.blackWithOpacity,
        justifyContent:"center",
        alignItems:"center",
        width:'100%',
        height:'100%'
    },
    text_loading:{
        color:Colors.primary,
        fontSize:20,
        fontFamily:Fonts.NunitoSemiBold
    }
})
