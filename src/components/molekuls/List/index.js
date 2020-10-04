import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { DummyDoctor1, DummyDoctor4 } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const List = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor4} style={styles.image}/>
            <View>
                <Text style={styles.name}>Alexander Janie</Text>
                <Text style={styles.textMessage}>Baik ibu,terimakasih banyak atas</Text>
            </View>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:16,
        borderBottomWidth:2,
        borderBottomColor:Colors.grey2
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
        color:Colors.secondary
    },  
    textMessage:{
        fontFamily:Fonts.NunitoRegular,
        fontSize:12,
        color:Colors.grey1
    }
})
