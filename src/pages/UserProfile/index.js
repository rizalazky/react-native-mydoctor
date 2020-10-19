import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import { Avatar, Header, List } from '../../components'
import { Colors, _retrieveData } from '../../utils'

const UserProfile = ({navigation}) => {
    const [data,setData]=useState({
        fullName:'',
        pekerjaan:'',
        photo:ILNullPhoto
    })

    useEffect(()=>{
        console.log('User Profile Retrieve')
        _retrieveData('user')
        .then(res=>{
            console.log(res)
            let dt=res
            dt.photo={uri:res.photo}
            setData(dt)
        })
        console.log(data)
    },[])


    return (
        <View style={styles.container}>
            <Header onPress={()=>navigation.goBack()} title='Profile'/>
            <View style={styles.avatarWrapper}>
                <Avatar name={data.fullName} profesion={data.pekerjaan} icon='iconFemale' imageSource={data.photo}/>
            </View>
            <View>
                <List isNext title='Edit Profile' 
                        icon='editProfile' 
                        desc='Last Update Yesterday'
                        onPress={()=>navigation.navigate('EditProfile',data)}
                />
                <List isNext title='Language' icon='language' desc='Available 12 Language'/>
                <List isNext title='Give Us Rate' icon='giveUsRate' desc='On Google Playstore'/>
                <List isNext title='Help Center' icon='helpCenter' desc='Read Our Guidelines'/>
            </View>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        flex:1,
    },
    avatarWrapper:{
        paddingVertical:30
    }
})
