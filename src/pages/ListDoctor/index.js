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
        .orderByChild('spesialis')
        .equalTo(params.titleHeader)
        .once('value')
        .then((result)=>{
            let datDoctors=[]
            Object.keys(result.val()).map(keyDoc=>{
                let dt=result.val()[keyDoc]
                dt.uidPartner=keyDoc
                datDoctors.push({
                    id:keyDoc,
                    data:dt
                })
            })
            setListDoctor(datDoctors)
        }).catch(err=>console.log(err))

    },[])
    return (
        <View style={styles.page}>
            <Header title={`Pilih ${params.titleHeader}`} type='dark' onPress={()=>navigation.goBack()}/>
            {
                listDoctor.map((doctor)=>{
                    return(
                        <List key={doctor.id} imageSource={{uri:doctor.data.photo}} title={doctor.data.fullName} isNext onPress={()=>navigation.navigate('Chatting',{data:doctor})}/>
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
