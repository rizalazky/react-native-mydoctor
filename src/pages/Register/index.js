import React, { useState } from 'react'
import { View,StyleSheet } from 'react-native'
import { Button, Gap, Header, Input,Loading } from '../../components'
import { Firebase } from '../../config'
import { Colors, _storeData,useForm, _retrieveData } from '../../utils'
import { showMessage } from "react-native-flash-message";
import {useDispatch} from 'react-redux'



const Register = ({navigation}) => {
    const [values,setValues]=useForm({
        fullName:'',
        pekerjaan:'',
        email:'',
        password:''
    })
    const dispatch = useDispatch()

    const handleContinue=()=>{
        dispatch({
            type:'SET_LOADING',
            value:true
        })
        Firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
        .then(success=>{
            // Firebase.database()
            let data={
                fullName:values.fullName,
                email:values.email,
                pekerjaan:values.pekerjaan,
                uid:success.user.uid
            }

            // let doctorCategory={
            //     doc_1:{
            //         doctorName:'Alexandria',
            //         doctorCategoryId:'cat_1',
            //         rating:3, 
            //     },
            //     doc_2:{
            //         doctorName:'Abonlahor',
            //         doctorCategoryId:'cat_1',
            //         rating:3, 
            //     },
            //     doc_3:{
            //         doctorName:'Sujamal',
            //         doctorCategoryId:'cat_1',
            //         rating:3, 
            //     },
            //     doc_5:{
            //         doctorName:'Jalaludin',
            //         doctorCategoryId:'cat_2',
            //         rating:3, 
            //     },
            //     doc_6:{
            //         doctorName:'Ratu Jodha',
            //         doctorCategoryId:'cat_2',
            //         rating:3, 
            //     },
            //     doc_7:{
            //         doctorName:'Rukayah',
            //         doctorCategoryId:'cat_2',
            //         rating:3, 
            //     },
            //     doc_8:{
            //         doctorName:'Candragupta',
            //         doctorCategoryId:'cat_3',
            //         rating:3, 
            //     },
            //     doc_9:{
            //         doctorName:'Aguero',
            //         doctorCategoryId:'cat_3',
            //         rating:3, 
            //     },
            //     doc_10:{
            //         doctorName:'Leroy Sane',
            //         doctorCategoryId:'cat_3',
            //         rating:3, 
            //     },
            //     doc_11:{
            //         doctorName:'Sukoday',
            //         doctorCategoryId:'cat_4',
            //         rating:3, 
            //     },
            //     doc_12:{
            //         doctorName:'Sukmad',
            //         doctorCategoryId:'cat_4',
            //         rating:3, 
            //     },
            //     doc_13:{
            //         doctorName:'dzeko',
            //         doctorCategoryId:'cat_4',
            //         rating:3, 
            //     },
            //     doc_14:{
            //         doctorName:'Balotelli',
            //         doctorCategoryId:'cat_5',
            //         rating:3, 
            //     },
            //     doc_15:{
            //         doctorName:'Silva David',
            //         doctorCategoryId:'cat_5',
            //         rating:3, 
            //     },
            //     doc_16:{
            //         doctorName:'Nastasic',
            //         doctorCategoryId:'cat_5',
            //         rating:3, 
            //     },
            // }

            // Firebase.database().ref('list_doctor').set(doctorCategory)
            // .then(suc=>{
            //     console.log(suc)
            // }).catch(err=>{
            //     console.log(err)
            // })

            dispatch({
                type:'SET_LOADING',
                value:false
            })
            Firebase.database().ref('users/'+success.user.uid+'/').set(data)
            .then(res=>{
                showMessage({
                    message:'Registrasi Berhasil',
                    type:'success'
                })
                _storeData('user',data)
                navigation.navigate('UploadFoto',data)
            })
        }).catch(err=>{
            dispatch({
                type:'SET_LOADING',
                value:false
            })
            showMessage({
                message:'Sign Up Failed...'+err.message,
                type:'danger'
            })
        })
    }


    return (
        <View style={styles.page}>
            <View>
                <Header title="Daftar Akun" onPress={()=>navigation.goBack()}/>
            </View>
            <View style={styles.Register__Content}>
                <View>
                    <Input label="Full Name" value={values.fullName} onChangeText={(value)=>setValues('fullName',value)}/>
                    <Input label="Pekerjaan" value={values.pekerjaan} onChangeText={(value)=>setValues('pekerjaan',value)}/>
                    <Input label="Email Address" value={values.email} onChangeText={(value)=>setValues('email',value)}/>
                    <Input secureTextEntry label="Password" value={values.password}  onChangeText={(value)=>setValues('password',value)}/>
                </View>
                <Gap height={40}/>
                <Button title="Continue" onPress={handleContinue}/>
            </View>   
        </View>
        
    )
}

const styles=StyleSheet.create({
    page:{
        backgroundColor:Colors.white,
        flex:1
    },
    Register__Content:{
        padding:30
    }
})

export default Register
