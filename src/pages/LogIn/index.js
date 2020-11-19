import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { ILLogo } from '../../assets'
import { Button, Gap,Input,Link, Loading } from '../../components'
import { Firebase } from '../../config'
import { Fonts, useForm, _storeData } from '../../utils'
import {useDispatch} from 'react-redux'

const LogIn = ({navigation}) => {
    const [form,setForm]=useForm({
        email:'',
        password:''
    })
    const dispatch = useDispatch()

    const sigIn=()=>{
        dispatch({
            type:'SET_LOADING',
            value:true
        })
        Firebase.auth().signInWithEmailAndPassword(form.email,form.password)
        .then(response=>{

            setForm('reset')
            console.log(form,'from')
            Firebase.database().ref(`/users/${response.user.uid}`)
            .once('value').then(res=>{
                showMessage({
                    message:'Welcome Back '+res.val().fullName,
                    type:"success",
                    icon:"success"
                })
                _storeData('user',res.val())
                dispatch({
                    type:'SET_LOADING',
                    value:false
                })
                
                navigation.navigate('Main')
            })
        })
        .catch(err=>{
            dispatch({
                type:'SET_LOADING',
                value:false
            })
            showMessage({
                message:'Sory...'+err.message,
                type:"danger",
                icon:"danger"
            })
        })

    }

    return (
       
            <View style={styles.sigIn}>
                <ILLogo/>
                <Text style={styles.sigIn__Text}>Masuk dan Mulai berkonsultasi</Text>
                <Gap height={40}/>
                <Input label="Email Adress" placeholder="type email here..." value={form.email} onChangeText={(e)=>setForm('email',e)}/>
                
                <Input label="Password" secureTextEntry placeholder="type password here..." value={form.password} onChangeText={(e)=>setForm('password',e)}/>
                <Gap height={10}/>
                <Link title="Forgot My Password" fontSize={12}/>
                <Gap height={40}/>
                <Button title="Sign In" onPress={sigIn}/>
                <Gap height={30}/>
                <Link title="Create New Account" align="center" fontSize={16} 
                    onPress={()=>navigation.navigate("Register")}/>
            </View>
        
    )
}

export default LogIn

const styles = StyleSheet.create({
    sigIn:{
        padding:40
    },
    sigIn__Text:{
        marginVertical:40,
        fontFamily:Fonts.NunitoSemiBold,
        fontSize:20,
        lineHeight:24,
        width:153
    }
})
