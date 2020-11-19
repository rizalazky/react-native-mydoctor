import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Firebase } from '../../config'
import { Fonts } from '../../utils'

export default function Splash({navigation}) {

    useEffect(() => {
        setTimeout(()=>{
            Firebase.auth().onAuthStateChanged(user=>{
                if(user){
                    navigation.replace('Main')
                }else{
                    navigation.replace('GetStarted')
                }
            })
        },3000)
    }, [])

    return (
        <View style={styles.Splash}>
            <ILLogo/>
            <Text style={styles.SplashText}>My Doctors</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Splash:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    SplashText:{
        marginTop:20,
        fontSize:20,
        fontFamily:Fonts.NunitoSemiBold
    }
})
