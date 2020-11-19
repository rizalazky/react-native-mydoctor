import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyDoctor10, DummyDoctor11 } from '../../assets'
import { Avatar, Button, Gap, Header, List } from '../../components'
import { Firebase } from '../../config'
import { Colors, Fonts } from '../../utils'

const DoctorProfile = ({navigation,route}) => {
    const data=route.params.topRated;

    return (
        <View style={styles.container}>
            <Header title='Doctor Profile' onPress={()=>navigation.goBack()}/>
            <Avatar icon={data.jenis_kelamin == 'Pria'?'iconMale':'iconFemale'} name={data.doctorName} profesion={data.spesialis} imageSource={{uri:data.image}}/>
            <Gap height={16}/>
            <View style={styles.content}>
                <Text style={styles.label}>Alumnus</Text>
                <Text style={styles.inputText}>{data.alumnus}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Tempat Praktik</Text>
                <Text style={styles.inputText}>{data.tempat_praktik}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>No. STR</Text>
                <Text style={styles.inputText}>{data.no_str}</Text>
            </View>
            <Gap height={23}/>
            <View style={{padding:40}}>
                <Button title='Start Consultant' onPress={()=>navigation.navigate('Chatting',{data})}/>
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    label:{
        color:Colors.grey1,
        fontFamily:Fonts.NunitoRegular
    },
    inputText:{
        fontFamily:Fonts.NunitoSemiBold,
        color:Colors.secondary,
        fontSize:14,
        marginTop:6
    },
    content:{
        borderBottomColor:Colors.grey2,
        borderBottomWidth:1,
        padding:16
    }
})
