import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { DummyDoctor1, DummyDoctor4, IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const List = ({isNext,onPress,title,desc,icon}) => {

    const Icon=()=>{
        if(icon=='editProfile'){
            return <IconEditProfile/>
        }
        if(icon=='language'){
            return <IconLanguage/>
        }
        if(icon=='giveUsRate'){
            return <IconRate/>
        }
        if(icon == 'helpCenter'){
            return <IconHelp/>
        }
        return <IconEditProfile/>
    }   
     return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {
                icon ?
                (<Icon style={styles.image}/>)
                :(
                <Image source={DummyDoctor4} style={styles.image}/>
                )
            }
            <View style={{flex:1,marginLeft:10}}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.textMessage}>{desc}</Text>
            </View>
            {
                isNext && <IconNext/> 
            }
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:16,
        alignItems:"center",
        borderBottomWidth:2,
        borderBottomColor:Colors.grey2,
        justifyContent:"space-between"
    },
    image:{
        width:46,
        height:46,
        borderRadius:46/2,
        marginRight:16
    },
    name:{
        fontFamily:Fonts.NunitoSemiBold,
        fontSize:16,
        color:Colors.secondary,
    },  
    textMessage:{
        fontFamily:Fonts.NunitoRegular,
        fontSize:12,
        color:Colors.grey1
    }
})
