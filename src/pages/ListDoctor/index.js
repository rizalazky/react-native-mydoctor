import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header,List} from '../../components'
import index from '../../components/atoms/Gap'
import { Firebase } from '../../config'
import { Colors } from '../../utils'

const ListDoctor = ({navigation,route}) => {
    const [listDoctor,setListDoctor]=useState([])

    const params=route.params

    useEffect(()=>{
        Firebase.database().ref('list_doctor/')
        .orderByChild('doctorCategoryId')
        .equalTo(params.id_cat)
        .once('value')
        .then((result)=>{
            setListDoctor(result.val())
        }).catch(err=>console.log(err))

    },[])
    return (
        <View style={styles.page}>
            <Header title={`Pilih ${params.titleHeader}`} type='dark' onPress={()=>navigation.goBack()}/>
            {
                Object.values(listDoctor).map((data,index)=>{
                    return(
                        <List key={index} imageSource={{uri:data.image}} title={data.doctorName} isNext onPress={()=>navigation.navigate('Chatting',{data:data})}/>
                    )
                })
            }
            {/* <List isNext onPress={()=>navigation.navigate('Chatting')}/>
            <List isNext onPress={()=>navigation.navigate('Chatting')}/> */}
        </View>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    page:{
        backgroundColor:Colors.white,
        flex:1
    }
})
