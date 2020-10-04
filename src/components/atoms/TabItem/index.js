import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { IconDoctor, IconDoctorActive, IconHospitals, IconHospitalsActive, IconMessages, IconMessagesActive } from '../../../assets'
import { Colors } from '../../../utils'

const TabItem = ({label,onPress,onLongPress,isFocused}) => {

    const Icon=()=>{
        if(label === "Doctor"){
            return isFocused ?<IconDoctorActive/>:<IconDoctor/>
        }
        if(label==="Messages"){
            return isFocused ? <IconMessagesActive/> :<IconMessages/>
        }
        if(label==="Hospitals"){
            return isFocused ? <IconHospitalsActive/> : <IconHospitals/>
        }
        return <IconDoctor/>
    }

    return (
        <TouchableOpacity style={styles.TabItem} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.TabItem__Text(isFocused)}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    TabItem:{
        flex:1,
        backgroundColor:Colors.secondary,
        height:87,
        alignItems:"center",
        justifyContent:"center",
    },
    TabItem__Text:(isFocused)=>({
        color:isFocused ? Colors.primary : Colors.grey3,
        margin:10
    })
})
