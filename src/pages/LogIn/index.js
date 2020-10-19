import { NavigationContainer } from '@react-navigation/native'
import { setLogLevel } from 'firebase'
import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { ILLogo } from '../../assets'
import { Button, Gap,Input,Link, Loading } from '../../components'
import { Firebase } from '../../config'
import { Fonts, useForm, _storeData } from '../../utils'

const LogIn = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [form,setForm]=useForm({
        email:'',
        password:''
    })

    const sigIn=()=>{
        setIsLoading(true)
        Firebase.auth().signInWithEmailAndPassword(form.email,form.password)
        .then(response=>{
            // console.log(response)
            Firebase.database().ref(`/users/${response.user.uid}`)
            .once('value').then(res=>{
                showMessage({
                    message:'Welcome Back '+res.val().fullName,
                    type:"success",
                    icon:"success"
                })
                _storeData('user',{
                    fullName:res.val().fullName,
                    email:res.val().email,
                    pekerjaan:res.val().pekerjaan,
                    photo:res.val().photo
                })
                setIsLoading(false)
                navigation.navigate('Main')
            })
        })
        .catch(err=>{
            setIsLoading(false)
            showMessage({
                message:'Sory...'+err.message,
                type:"danger",
                icon:"danger"
            })
        })

        // navigation.replace("Main")
    }

    return (
        <>   
            <View style={styles.sigIn}>
                <ILLogo/>
                <Text style={styles.sigIn__Text}>Masuk dan Mulai berkonsultasi</Text>
                <Gap height={40}/>
                <Input label="Email Adress" placeholder="type email here..." onChangeText={(e)=>setForm('email',e)}/>
                <Gap height={24}/>
                <Input label="Password" placeholder="type password here..." onChangeText={(e)=>setForm('password',e)}/>
                <Gap height={10}/>
                <Link title="Forgot My Password" fontSize={12}/>
                <Gap height={40}/>
                <Button title="Sign In" onPress={sigIn}/>
                <Gap height={30}/>
                <Link title="Create New Account" align="center" fontSize={16} 
                    onPress={()=>navigation.navigate("Register")}/>
            </View>
            {
                isLoading && <Loading/>
            }
        </>
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
