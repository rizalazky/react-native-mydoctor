import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { block } from 'react-native-reanimated'
// import { Image } from 'react-native-svg'

import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { Colors, Fonts } from '../../utils'

const UploadFoto = ({navigation}) => {
    return (
        <View style={styles.UploadFoto}>
            <Header title='Upload Foto' onPress={()=>navigation.goBack()}/>
            <View style={styles.UploadFoto__Content}>
                <View style={styles.UploadFoto__Content__Image}>
                    <View style={styles.UploadFoto__Content__Image__Wrapper}>
                        <Image source={ILNullPhoto} style={styles.Avatar}/>
                        <IconAddPhoto style={styles.UploadFoto__Button__AddFoto}/>
                        {/* <Button style={styles.UploadFoto__Button__AddFoto} type="icon" icon="add-foto"/> */}
                    </View>
                    <Text style={styles.TextName}>Shayna Melinda</Text>
                    <Text style={styles.TextProfesi}>Product Manager</Text>
                </View>
                <View>
                    <Button title="Upload and Continue"/>
                    <Gap height={20}/>
                    <Link title="Skip for this" align="center"/>
                </View>
                <Gap height={30}/>
            </View>
        </View>
    )
}

export default UploadFoto

const styles = StyleSheet.create({
    UploadFoto:{
        backgroundColor:Colors.white,
        flex:1,
    },
    UploadFoto__Content:{
        flex:1,
        justifyContent:'space-between'
        ,paddingHorizontal:40
    },
    UploadFoto__Content__Image:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,

    },
    Avatar:{
        height:130,
        width:130
    },
    UploadFoto__Content__Image__Wrapper:{
        borderWidth:1,
        borderStyle:"solid",
        borderColor:Colors.grey1,
        borderRadius:140/2,
        padding:5,
        
    },
    UploadFoto__Button__AddFoto:{
        position:"absolute",
        right:0,
        bottom:0
        // top:265,
        // left:209,
    },
    TextName:{
        fontSize:24,
        fontFamily:Fonts.NunitoSemiBold,
        color:Colors.dark1
    },
    TextProfesi:{
        fontSize:18,
        fontFamily:Fonts.NunitoRegular,
        color:Colors.grey1
    }
})
