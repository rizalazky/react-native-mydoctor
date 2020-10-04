import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'
import HeaderProfile from './HeaderProfile'

const Header = ({title,onPress,type}) => {
    if(type === 'header-profile'){
        return <HeaderProfile onPress={onPress}/>
    }

    return (
        <View style={styles.Header(type)}>
            <Button width={24} icon={type == 'dark'?'back-light':"back-dark"} type="icon" onPress={onPress}/>
            <Text style={styles.Header__Title(type)}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Header:(type)=>({
        flexDirection:"row",
        paddingVertical:30,
        paddingHorizontal:16,
        backgroundColor:type === 'dark' ?Colors.secondary:Colors.white,
        borderBottomLeftRadius:type === 'dark' ?20:0,
        borderBottomRightRadius:type === 'dark' ?20:0
    }),
    Header__Title:(type)=>({
        flex:1,
        textAlign:"center",
        fontSize:20,
        fontFamily:Fonts.NunitoSemiBold,
        color:type === 'dark' ?Colors.white:Colors.dark1,
    })
})
