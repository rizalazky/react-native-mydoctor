import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Header,InputChat,ChatItem} from '../../components'
import Firebase from '../../config/Firebase'
import { Colors, Fonts, _retrieveData } from '../../utils'

const Chatting = ({navigation,route}) => {
    const [user,setUser]=useState({})
    const [chatText,setChatText]=useState('')
    const [chatList,setChatList]=useState([])
    const dataDoctor=route.params.data
    
    
    useEffect(()=>{
        _retrieveData('user')
        .then(res=>{
            setUser(res)
        })
        const today=new Date()
        
        const chatId=`${user != null && user.uid}_${dataDoctor.id}`
        Firebase.database().ref(`chatting/${chatId}/allchat/`)
        .on('value',snapshot=>{
            if(snapshot.val()){
                let snapshotData=snapshot.val()
                let chatList=[]
                Object.keys(snapshotData).map(keyChat=>{
                    let data=snapshotData[keyChat]
                    let chatContent=[]
                    Object.keys(data).map(keyData=>{
                        chatContent.push({
                            id:keyData,
                            data:data[keyData]
                        })
                    })
                    chatList.push({
                        id:keyChat,
                        data:chatContent
                    })
                })
                console.log('chatlist',chatList)
                setChatList(chatList)
            }
        })
    },[user.uid,dataDoctor.id])

    

    const sendChat=()=>{

        const chatId=`${user.uid}_${dataDoctor.id}`
        const today=new Date()
        const dateChat=`${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`
        let dataChat={
            sentBy:user.uid,
            chatDate:dateChat,
            chatTime:`${today.getHours()}:${today.getMinutes()}`,
            chatContent:chatText
        }
        let dataHistoryChat={
            lastChatContent:chatText,
            lastChatDate:dateChat,
            uidPartner:dataDoctor.id
        }
        Firebase.database().ref(`chatting/${chatId}/allchat/${dateChat}/`).push(dataChat)
        .then( ()=>{
            setChatText('')
            Firebase.database().ref(`messages/${user.uid}/${chatId}/`).set(dataHistoryChat)
        })
        
    }

    return (
        <View style={styles.container}>
            <Header type='header-profile' title={dataDoctor.doctorName} text={dataDoctor.spesialis} image={{uri:dataDoctor.image}} onPress={()=>navigation.goBack()}/>
            <View style={styles.container__chat}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        chatList.map((chat)=>{
                            return(
                            <View key={chat.id}>
                                <Text style={styles.date}>{chat.id}</Text>
                                
                                    {
                                        chat.data.map((content)=>{
                                            return(
                                                <ChatItem key={content.id} isMe={content.data.sentBy == user.uid} text={content.data.chatContent} date={content.data.chatTime}/>
                                            )
                                        })
                                    }
                                    {/* <ChatItem isMe/>
                                    <ChatItem/>
                                    <ChatItem isMe/> */}
                                
                            </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <InputChat value={chatText} disabled={chatText.length < 1} onChangeText={e=>setChatText(e)} onPress={sendChat}/>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        flex:1,
        paddingBottom:20,
        justifyContent:'space-between'
    },
    container__chat:{
        flex:1,
        marginTop:10
        
    },
    date:{
        textAlign:"center",
        fontSize:14,
        fontFamily:Fonts.NunitoRegular,
        color:Colors.grey3,

    }
})
