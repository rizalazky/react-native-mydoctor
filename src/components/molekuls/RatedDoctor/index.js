import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyDoctor1, IconStar } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const RatedDoctor = ({onPress,doctorName,spesialis}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.container__profile}>
                <Image source={DummyDoctor1} style={styles.profileImage}/>
                <View>
                    <Text style={styles.profileName}>Poe Min</Text>
                    <Text style={styles.profileProfesional}>podiatris</Text>
                </View>
            </View>
            <View style={{flexDirection:"row"}}>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
            </View>
        </TouchableOpacity>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:16,
        alignItems:"center",
    },container__profile:{
        flexDirection:"row"
    },
    profileImage:{
        height:50,
        width:50,
        borderRadius:50/2,
        marginRight:12
    },
    profileName:{
        color:Colors.dark1,
        fontFamily:Fonts.NunitoSemiBold,
        fontSize:20,
    }
    ,profileProfesional:{
        fontSize:12,
        fontFamily:Fonts.NunitoSemiBold,
        color:Colors.grey1
    }
})
