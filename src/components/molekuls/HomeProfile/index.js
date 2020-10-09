import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyUser } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const HomeProfile = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={DummyUser} style={styles.image}/>
            <View>
                <Text style={styles.userName}>Shayna Mellinda</Text>
                <Text style={styles.userProfesional}>Product Designer</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    image:{
        height:46,
        width:46,
        borderRadius:46/2,
        marginRight:12
    },
    userName:{
        color:Colors.dark1,
        fontFamily:Fonts.NunitoSemiBold,
        fontSize:16
    },
    userProfesional:{
        fontSize:12,
        fontFamily:Fonts.NunitoExtraLight
    }
})
