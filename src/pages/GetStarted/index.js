import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { Gap,Button } from '../../components'
import { Colors, Fonts } from '../../utils'



export default function GetStarted({navigation}) {
    return (
        <ImageBackground source={ILGetStarted} style={styles.GetStarted}>
            <View>
                <ILLogo/>
                <Text style={styles.GetStarted__Text}>
                    Konsultasi dengan Dokter jadi lebih mudah & flexibel
                </Text>
            </View>
            <View>
                <Button title='Get Started' onPress={()=>navigation.navigate('Register')}/>
                <Gap height={16}/>
                <Button title='Sign In' type="secondary" onPress={()=>navigation.navigate('LogIn')}/>
            </View> 
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    GetStarted:{
        flex:1,
        padding:40,
        justifyContent:'space-between',
    },
    GetStarted__Text:{
        marginTop:100,
        fontSize:28,
        color:Colors.white,
        fontFamily:Fonts.NunitoSemiBold
    }
})
