import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const DoctorCategory = ({label,icon}) => {

    const Icon=()=>{
        if(icon === "DokterUmum"){
            return <ILCatUmum/>
        }
        if(icon === "Psikater"){
            return <ILCatPsikiater/>
        }
        if(icon === "DokterObat"){
            return <ILCatObat/>
        }

        return <ILCatUmum/> 
    }

    return (
        <View style={styles.container}>
            <Icon/>
            <Text style={styles.text}>Saya Butuh</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.green2,
        padding:12,
        marginRight:10,
        height:130,
        borderRadius:10
    },
    text:{
        fontFamily:Fonts.NunitoRegular,
        fontSize:12,
        color:Colors.grey1,
        marginTop:28
    },
    label:{
        fontFamily:Fonts.NunitoSemiBold,
        fontSize:12,
        color:Colors.dark1
    }
})
