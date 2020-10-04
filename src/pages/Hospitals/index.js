import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILHospitalBG } from '../../assets/illustration'
import { ListRumahSakit } from '../../components/molekuls'
import {Colors, Fonts} from '../../utils'

const Hospitals = () => {
    return (
        <View style={styles.container}> 
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                <Text style={styles.textbackground}>Nearby Hospitals</Text>
                <Text style={styles.textbackground2}>3 tersedia</Text>
            </ImageBackground>  
            <View style={styles.content}>
                <ListRumahSakit rumahSakit="Rumah Sakit Citra Bunga Merdeka" alamat="jln surya Sejahtera 20"/>
                <ListRumahSakit rumahSakit="Rumah Sakit Citra Bunga Merdeka" alamat="jln surya Sejahtera 20"/>
                <ListRumahSakit rumahSakit="Rumah Sakit Citra Bunga Merdeka" alamat="jln surya Sejahtera 20"/>          
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    background:{
        height:240,
        paddingTop:30,
        alignItems:"center"
    },
    textbackground:{
        color:Colors.white,
        fontSize:20,
        fontFamily:Fonts.NunitoSemiBold
    },
    textbackground2:{
        color:Colors.white,
        fontSize:14,
        fontFamily:Fonts.NunitoRegular
    },
    content:{
        backgroundColor:Colors.white,
        flex:1,
        borderRadius:20,
        marginTop:-16,
        paddingVertical:20

    },
    container:{
        backgroundColor:Colors.secondary,
        flex:1
    }
})
