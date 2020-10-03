import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'

const Register = ({navigation}) => {
    return (
        <View>
            <View>
                <Header title="Daftar Akun" onPress={()=>navigation.goBack()}/>
            </View>
            <View style={styles.Register__Content}>
                <View>
                    <Input label="Full Name" />
                    <Input label="Pekerjaan" />
                    <Input label="Email Address" />
                    <Input label="Password" />
                </View>
                <Gap height={40}/>
                <Button title="Continue" onPress={()=>navigation.navigate('UploadFoto')}/>
            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    Register__Content:{
        padding:30
    }
})

export default Register
