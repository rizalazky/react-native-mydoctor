import React from 'react'
import IsMe from './IsMe'
import Other from './Other'

const ChatItem = ({isMe,text,date}) => {

    if(isMe){
        return <IsMe text='Ibu dokter, apakah memakan
        jeruk tiap hari itu buruk?' date='4:20 AM'/>
    }
    
    return(
        <Other text='Ibu dokter, apakah memakan
        jeruk tiap hari itu buruk?' date='4:20 AM'/>
    )


}

export default ChatItem

