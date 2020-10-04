import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { DummyHospital1 } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const ListRumahSakit = ({alamat,rumahSakit}) => {
    return (
        <View style={styles.container}>
            <Image source={DummyHospital1} style={styles.image}/>
            <View>
                <Text tyle={styles.text__rumahsakit}>{rumahSakit}</Text>
                <Text style={styles.text__alamat}>{alamat}</Text>
            </View>
        </View>
    )
}

export default ListRumahSakit

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:16
    },
    image:{
        width:80,
        height:60,
        borderRadius:10,
        marginRight:16
    },
    text__rumahsakit:{
        fontFamily:Fonts.NunitoSemiBold,
        color:Colors.dark1,
        fontSize:20,
    },
    text__alamat:{
        fontFamily:Fonts.NunitoRegular,
        color:Colors.grey1,
        fontSize:12

    }
    
})
