import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { DummyDoctor9, IconBackLight } from '../../../assets'
import { Colors, Fonts } from '../../../utils'


const HeaderProfile = ({onPress,title,text,image}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <IconBackLight/>
            <View>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.profesi}>{text}</Text>
            </View>
            <Image style={styles.image} source={image}/>
        </TouchableOpacity>
    )
}

export default HeaderProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.secondary,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:30,
        paddingHorizontal:16,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    name:{
        color:Colors.white,
        fontSize:20,
        fontFamily:Fonts.NunitoSemiBold
    },
    profesi:{
        fontSize:14,
        fontFamily:Fonts.NunitoRegular,
        color:Colors.grey1,
        textAlign:"center"
    },
    image:{
        height:46,
        width:46,
        borderRadius:46/2
    }

})
