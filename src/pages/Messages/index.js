import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from '../../components'
import { Firebase } from '../../config'
import { Colors, Fonts, _retrieveData } from '../../utils'

const Messages = ({navigation}) => {
    const [pesan,setPesan]=useState([])
    const [user,setUser]=useState({})

    const getLocalUser=()=>{
        _retrieveData('user')
        .then(res=>{
            setUser(res)
        })
    }


    useEffect(()=>{
        getLocalUser()
        Firebase.database().ref(`messages/${user !=null && user.uid}/`)
        .on('value',async val=>{
            let newMessages=[]
            if(val.val()){
                let message=val.val()
                const promises=await Object.keys(message).map(async messagesKey=>{
                    const getPatner=await Firebase.database().ref(`users/`+message[messagesKey].uidPartner)
                    .once('value')
                    let dataPatner=getPatner.val()
                    let dataFinal={...dataPatner,...message[messagesKey]}
                    newMessages.push({
                        idMessage:messagesKey,
                        data:dataFinal
                    })  
                })
                await Promise.all(promises)
                setPesan(newMessages)
            }
     
        })
    },[user.uid])
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Message</Text>
                {
                    pesan.map(mess=>{  
                        return(
                            <List key={mess.idMessage} 
                                title={mess.data.fullName} 
                                imageSource={{uri:mess.data.photo}} 
                                desc={mess.data.lastChatContent}
                                onPress={()=>navigation.navigate('Chatting',{data:mess})} 
                                isNext/>
                        )
                    })
                }
                
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.secondary,
        flex:1
    },
    content:{
        paddingVertical:30,
        backgroundColor:Colors.white,
        flex:1,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    text:{
        marginBottom:16,
        marginLeft:16,
        color:Colors.dark1,
        fontFamily:Fonts.NunitoBold,
        fontSize:20
    }
})
