import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyUser, IconEditProfile, IconFemale, IconMale, IconRemovePhoto } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const Avatar = ({icon,name,profesion,imageSource,onPress}) => {

    const Icon=()=>{
        console.log(icon)
        if(icon=='iconMale'){
            return <IconMale style={styles.iconStyle}/>
        }
        if(icon=='iconFemale'){
            return <IconFemale style={styles.iconStyle}/>
        }
        if(icon=='deleteImage'){
            return <IconRemovePhoto style={styles.iconStyle}/>
        }

        return <IconRemovePhoto/>
    }
    

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={imageSource}/>  
                <Icon style={styles.iconStyle}/>
            </View>
            {
                name !=null &&
                <View>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.professionText}>{profesion}</Text>
                </View>

            }
        </TouchableOpacity>
    )
}

export default Avatar

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
    },
    imageWrapper:{
        height:140,
        width:140,
        borderStyle:"solid",
        borderColor:Colors.grey1,
        borderWidth:1,
        borderRadius:140/2,
        marginBottom:16,
        alignItems:"center",
        justifyContent:"center"
    },  
    image:{
        height:130,
        width:130,
        borderRadius:130/2,
    },
    iconStyle:{
        position:"absolute",
        right:0,
        bottom:0
    },
    nameText:{
        fontSize:20,
        fontFamily:Fonts.NunitoSemiBold,
        color:Colors.dark1,textAlign:"center"
    },
    professionText:{
        fontSize:16,
        fontFamily:Fonts.NunitoRegular,
        color:Colors.grey1,
        textAlign:"center"
    }

    })
