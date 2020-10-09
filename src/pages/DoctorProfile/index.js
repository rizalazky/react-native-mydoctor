import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor10, DummyDoctor11 } from '../../assets'
import { Avatar, Button, Gap, Header, List } from '../../components'
import { Colors, Fonts } from '../../utils'

const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title='Doctor Profile' onPress={()=>navigation.goBack()}/>
            <Avatar icon='iconMale' name='Angga Setiawan' profesion='Psikater' imageSource={DummyDoctor10}/>
            <Gap height={16}/>
            <View style={styles.content}>
                <Text style={styles.label}>Alumnus</Text>
                <Text style={styles.inputText}>Universitas of BWA,2019</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Tempat Praktik</Text>
                <Text style={styles.inputText}>Rumah Sakit Angga,Jakarta</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>No. STR</Text>
                <Text style={styles.inputText}>12345677987654</Text>
            </View>
            <Gap height={23}/>
            <View style={{padding:40}}>
                <Button title='Start Consultant'/>
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
