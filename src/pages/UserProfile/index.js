import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Header, List } from '../../components'
import { Colors } from '../../utils'

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header onPress={()=>navigation.goBack()} title='Profile'/>
            <View style={styles.avatarWrapper}>
                <Avatar name='Shayna Melinda' profesion='Product Designer' icon='iconFemale'/>
            </View>
            <View>
                <List isNext title='Edit Profile' 
                        icon='editProfile' 
                        desc='Last Update Yesterday'
                        onPress={()=>navigation.navigate('EditProfile')}
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
