import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { Colors, Fonts, _retrieveData } from '../../../utils'

const HomeProfile = ({onPress}) => {

    const [dataUser,setDataUser]=useState({
        fullName:'',
        pekerjaan:'',
        photo:ILNullPhoto
    })

    useEffect(() => {
        _retrieveData('user').then(res=>{
            let data=res
            data.photo={uri:res.photo}
            setDataUser(data)
        })
        
    }, [])

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={dataUser.photo} style={styles.image}/>
            <View>
                <Text style={styles.userName}>{dataUser.fullName}</Text>
                <Text style={styles.userProfesional}>{dataUser.pekerjaan}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    image:{
        height:46,
        width:46,
        borderRadius:46/2,
        marginRight:12
    },
    userName:{
        color:Colors.dark1,
        fontFamily:Fonts.NunitoSemiBold,
        fontSize:16
    },
    userProfesional:{
        fontSize:12,
        fontFamily:Fonts.NunitoExtraLight
    }
})
