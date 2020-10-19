import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import ImagePicker from 'react-native-image-picker'
import {Avatar,Button,Gap,Header, Input, Loading} from '../../components'
import { Firebase } from '../../config'
import { Colors, useForm, _storeData } from '../../utils'

const EditProfile = ({navigation,route}) => {
    const [isLoading,setIsLoading]=useState(false)
    const [photo,setPhoto]=useState(route.params.photo)
    const [photoForDb,setPhotoForDb]=useState()
    const [data,setData]=useForm({
        fullName:route.params.fullName,
        pekerjaan:route.params.pekerjaan,
        email:route.params.email,
        password:'',
    })
    
    const getPhoto=()=>{
        ImagePicker.showImagePicker({
            maxWidth:200,
            maxHeight:200,
            quality:0.5
        },(response)=>{
            if(response.didCancel){
                console.log('cancel')
            }else{
                // console.log(response.uri)
                setPhoto({uri:response.uri})
                setPhotoForDb(`data:${response.type};base64,${response.data}`)
            }
        })
    }

    const saveProfile=()=>{
        setIsLoading(true)
        let dt={
            fullName:data.fullName,
            email:data.email,
            pekerjaan:data.pekerjaan,
            uid:route.params.uid,
            photo:photoForDb
        }

        Firebase.database().ref(`users/${dt.uid}/`).update(dt)
        .then(res=>{
            setIsLoading(false)
            showMessage({
                message:'Success Update Data',
                type:"success"
            })
            _storeData('user',dt)
        })
        .catch(err=>{
            setIsLoading(false)
            showMessage({
                message:'Failed to Update Data',
                type:"warning"
            })
        })
    }

    return (
        <>
            <View style={styles.container}>
                <Header title='Edit Profile' onPress={()=>navigation.goBack()}/>
                <Avatar imageSource={photo} icon='deleteImage' onPress={getPhoto}/>
                <View style={styles.inputContainer}>
                    <Input label='Full Name' value={data.fullName} onChangeText={(text)=>setData('fullName',text)}/>
                    <Input label='Pekerjaan' value={data.pekerjaan} onChangeText={(text)=>setData('pekerjaan',text)}/>
                    <Input label='Email Adress' value={data.email} onChangeText={(text)=>setData('email',text)}/>
                    <Input label='Password' value={data.password} onChangeText={(text)=>setData('password',text)}/>
                    <Gap height={40}/>
                    <Button title='Save Profile' type='primary' onPress={saveProfile}/>
                </View>
            </View>
            {
                isLoading && <Loading/>
            }
        </>
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
