import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header,List} from '../../components'
import { Colors } from '../../utils'

const ListDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title={`Pilih Dokter`} type='dark' onPress={()=>navigation.goBack()}/>
            <List isNext onPress={navigation.navigate('Chatting')}/>
            <List isNext onPress={navigation.navigate('Chatting')}/>
            <List isNext onPress={navigation.navigate('Chatting')}/>
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
