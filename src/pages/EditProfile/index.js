import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Avatar,Button,Gap,Header, Input} from '../../components'
import { Colors } from '../../utils'

const EditProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title='Edit Profile' onPress={()=>navigation.goBack()}/>
            <Avatar icon='deleteImage'/>
            <View style={styles.inputContainer}>
                <Input label='Full Name'/>
                <Input label='Pekerjaan'/>
                <Input label='Email Adress'/>
                <Input label='Password'/>
                <Gap height={40}/>
                <Button title='Save Profile' type='primary'/>
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        flex:1
    },
    inputContainer:{
        padding:40
    }
})
