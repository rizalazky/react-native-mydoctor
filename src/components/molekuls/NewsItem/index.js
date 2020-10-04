import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { DummyNews1 } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const NewsItem = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                Is it safe to stay at home during coronavirus?
                </Text>
                <Text style={styles.date}>
                    Today
                </Text>
            </View>
            
            <Image source={DummyNews1} style={styles.image}/>
            
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:16,
        borderBottomColor:Colors.grey1,
        borderStyle:"solid",
        borderBottomWidth:1,
    },
    title:{
        fontSize:16,
        fontFamily:Fonts.NunitoSemiBold,
        maxWidth:200,
        color:Colors.dark1,
        marginBottom:16
    },
    date:{
        fontSize:12,
        fontFamily:Fonts.NunitoRegular,
        color:Colors.grey1
    },
    image:{
        width:120,
        height:80,
        borderRadius:10,
        marginBottom:16
    }
})
