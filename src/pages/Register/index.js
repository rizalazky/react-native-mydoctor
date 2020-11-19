import React, { useState } from 'react'
import { View,StyleSheet, CheckBox,Text } from 'react-native'
import { Button, Gap, Header, Input,Loading } from '../../components'
import { Firebase } from '../../config'
import { Colors, _storeData,useForm, _retrieveData } from '../../utils'
import { showMessage } from "react-native-flash-message";
import {useDispatch} from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'



const Register = ({navigation}) => {
    const [values,setValues]=useForm({
        fullName:'',
        pekerjaan:'',
        email:'',
        password:'',
        spesialis:'',
        jenisKelamin:'',
        noStr:'',
        tempatPraktik:''
    })
    const [isDoctor,setIsDoctor]=useState(false)
    const [categorieDoctor,setCategorieDoctor]=useState([])

    const dispatch = useDispatch()

    const handleContinue=()=>{
        dispatch({
            type:'SET_LOADING',
            value:true
        })
        Firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
        .then(success=>{
            // Firebase.database()
            let data={}
            if(isDoctor==false){
                data={
                    fullName:values.fullName,
                    email:values.email,
                    pekerjaan:values.pekerjaan,
                    uid:success.user.uid
                }
            }else{
                data={
                    fullName:values.fullName,
                    email:values.email,
                    uid:success.user.uid,
                    spesialis:values.spesialis,
                    noStr:values.noStr,
                    tempatPraktik:values.tempatPraktik,
                    jenisKelamin:values.jenisKelamin,
                    rating:0,
                    isDoctor:true
                }

            }

            dispatch({
                type:'SET_LOADING',
                value:false
            })
            Firebase.database().ref('users/'+success.user.uid+'/').set(data)
            .then(res=>{
                if(isDoctor==true){
                    Firebase.database().ref('list_doctor/'+success.user.uid+'/').set(data)
                    .then(()=>{
                        showMessage({
                            message:'Registrasi Berhasil',
                            type:'success'
                        })
                    })
                }else{
                    showMessage({
                        message:'Registrasi Berhasil',
                        type:'success'
                    })
                }
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
    

    const handleCheckIsDoctor=()=>{
        setIsDoctor(!isDoctor)
        if(isDoctor==true){
            Firebase.database().ref('doctor_categories/')
            .once('value').then(res=>{
                let cat=[]
                Object.keys(res.val()).map(ct=>{
                    cat.push(res.val()[ct].desc)
                })
                console.log(cat,'cat')
                setCategorieDoctor(cat)
            })
        }
    }

    return (
        <View style={styles.page}>
            <View>
                <Header title="Daftar Akun" onPress={()=>navigation.goBack()}/>
            </View>
            <View style={styles.Register__Content}>
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{flexDirection:'row',justifyContent:"flex-end",alignItems:'center'}}>
                            <Text>Masuk sebagai dokter??</Text>
                            <CheckBox  value={isDoctor} onValueChange={handleCheckIsDoctor}/>
                        </View>
                        <Input label="Full Name" value={values.fullName} onChangeText={(value)=>setValues('fullName',value)}/>
                        {
                            isDoctor ? (
                                <View>
                                    <Input picker label='Spesialis' value={values.spesialis} dataPicker={categorieDoctor} onChangeText={(val)=>setValues('spesialis',val)}/> 
                                    <Input picker label='Jenis Kelamin' value={values.jenisKelamin} dataPicker={["Pria","Wanita"]} onChangeText={(val)=>setValues('jenisKelamin',val)}/> 
                                    <Input label='No STR' value={values.noStr} onChangeText={(val)=>setValues('noStr',val)}/>
                                    <Input label='Tempat Praktik' value={values.tempatPraktik} onChangeText={(val)=>setValues('tempatPraktik',val)}/>
                                </View>
                            ):(
                                
                                <Input label="Pekerjaan" value={values.pekerjaan} onChangeText={(value)=>setValues('pekerjaan',value)}/>
                            )
                        }
                        <Input label="Email Address" value={values.email} onChangeText={(value)=>setValues('email',value)}/>
                        <Input secureTextEntry label="Password" value={values.password}  onChangeText={(value)=>setValues('password',value)}/>
                        <Gap height={20}/>
                        <Button title="Continue" onPress={handleContinue}/>
                        </ScrollView>
                    </View>
                
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
