import React, { useState } from 'react'
import { View,StyleSheet } from 'react-native'
import { Button, Gap, Header, Input,Loading } from '../../components'
import { Firebase } from '../../config'
import { Colors, _storeData,useForm, _retrieveData } from '../../utils'
import { showMessage } from "react-native-flash-message";



const Register = ({navigation}) => {
    const [loading,setLoading]=useState(false)
    const [values,setValues]=useForm({
        fullName:'',
        pekerjaan:'',
        email:'',
        password:''
    })

    const handleContinue=()=>{
        setLoading(true)
        Firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
        .then(success=>{
            // Firebase.database()
            let data={
                fullName:values.fullName,
                email:values.email,
                pekerjaan:values.pekerjaan,
                uid:success.user.uid
            }
            
            setLoading(false)
            Firebase.database().ref('users/'+success.user.uid+'/').set(data)
            .then(res=>{
                console.log(res)
                showMessage({
                    message:'Registrasi Berhasil',
                    type:'success'
                })
                _storeData('user',data)
                navigation.navigate('UploadFoto',data)
            })
        }).catch(err=>{
            console.log(err)
            setLoading(false)
            showMessage({
                message:'Sign Up Failed...'+err.message,
                type:'danger'
            })
        })
    }


    return (
        <>
        <View style={styles.page}>
            <View>
                <Header title="Daftar Akun" onPress={()=>navigation.goBack()}/>
            </View>
            <View style={styles.Register__Content}>
                <View>
                    <Input label="Full Name" value={values.fullName} onChangeText={(value)=>setValues('fullName',value)}/>
                    <Input label="Pekerjaan" value={values.pekerjaan} onChangeText={(value)=>setValues('pekerjaan',value)}/>
                    <Input label="Email Address" value={values.email} onChangeText={(value)=>setValues('email',value)}/>
                    <Input label="Password" value={values.password} onChangeText={(value)=>setValues('password',value)}/>
                </View>
                <Gap height={40}/>
                <Button title="Continue" onPress={handleContinue}/>
            </View>   
        </View>
        {
            loading && <Loading/>
        }
        </>
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
