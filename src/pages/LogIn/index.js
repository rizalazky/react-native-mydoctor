import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap,Input,Link } from '../../components'
import { Fonts } from '../../utils'

const LogIn = ({navigation}) => {
    return (
        <View style={styles.sigIn}>
            <ILLogo/>
            <Text style={styles.sigIn__Text}>Masuk dan Mulai berkonsultasi</Text>
            <Gap height={40}/>
            <Input label="Email Adress" placeholder="type email here..."/>
            <Gap height={24}/>
            <Input label="Password" placeholder="type password here..."/>
            <Gap height={10}/>
            <Link title="Forgot My Password" fontSize={12}/>
            <Gap height={40}/>
            <Button title="Sign In" onPress={()=>navigation.replace("Main")}/>
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
