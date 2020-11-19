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
                    const getListDoctor=await Firebase.database().ref(`list_doctor/`)
                    .orderByChild('id')
                    .equalTo(message[messagesKey].uidPartner)
                    .once('value')
                    let dataDoctor=getListDoctor.val()
                    let dataFinal={...dataDoctor[Object.keys(dataDoctor)],...message[messagesKey]}
                    newMessages.push({
                        id:messagesKey,
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
                            <List key={mess.id} 
                                title={mess.data.doctorName} 
                                imageSource={{uri:mess.data.image}} 
                                desc={mess.data.lastChatContent}
                                onPress={()=>navigation.navigate('Chatting',{data:mess.data})} 
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
