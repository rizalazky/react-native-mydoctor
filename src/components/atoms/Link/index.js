import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../../../utils'

const Link = ({title,align,fontSize,onPress}) => {
    return (
        <TouchableOpacity style={styles.Link} onPress={onPress}>
            <Text style={styles.Link__Title(align,fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    Link:{
        margin:10,
    },
    Link__Title:(align,fontSize)=>({
        textDecorationLine:"underline",
        color: Colors.grey1,
        textAlign:align,
        fontSize:fontSize
    })
})
