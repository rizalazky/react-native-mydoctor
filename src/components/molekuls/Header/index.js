import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'

const Header = ({title,onPress}) => {
    return (
        <View style={styles.Header}>
            <Button width={24} icon="back-dark" type="icon" onPress={onPress}/>
            <Text style={styles.Header__Title}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Header:{
        flexDirection:"row",
        marginVertical:30,
        marginHorizontal:16
    },
    Header__Title:{
        flex:1,
        textAlign:"center",
        fontSize:20,
        fontFamily:Fonts.NunitoSemiBold,
        color:Colors.dark1,
    }
})
