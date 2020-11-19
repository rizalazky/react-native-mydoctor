import React,{useState} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker'
// import { Image } from 'react-native-svg'

import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { Firebase } from '../../config'
import { Colors, Fonts, _retrieveData, _storeData } from '../../utils'

const UploadFoto = ({navigation,route}) => {

    const {fullName,pekerjaan,uid}=route.params
    const [photo,setPhoto]=useState(ILNullPhoto)
    const [photoForDb,setPhotoForDb]=useState()
    const [hasFoto,setHasFoto]=useState(false)

    const getFoto=()=>{
        
        ImagePicker.showImagePicker({
            quality:0.5,
            maxHeight:200,
            maxWidth:200
        },(response) => {
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                setPhotoForDb(`data:${response.type};base64,${response.data}`)
              setPhoto(source)
              setHasFoto(true)
            }
          });
    }
    const handleUpload=()=>{
        // upload foto to DB
        Firebase.database().ref(`users/${uid}/`)
        .update({
            photo:photoForDb
        })
        if(route.params.isDoctor==true){
            Firebase.database().ref(`list_doctor/${uid}/`)
            .update({
                photo:photoForDb
            })
        }
        // end upload foto to db

        // local storage
        let data=route.params
        data.photo=photoForDb

        _storeData('user',data)
        navigation.navigate('Main')
    }


    return (
        <View style={styles.UploadFoto}>
            <Header title='Upload Foto' onPress={()=>navigation.goBack()}/>
            <View style={styles.UploadFoto__Content}>
                <View style={styles.UploadFoto__Content__Image}>
                    <TouchableOpacity style={styles.UploadFoto__Content__Image__Wrapper} onPress={getFoto}>
                        <Image source={photo} style={styles.Avatar}/>
                        {
                            hasFoto ?
                            <IconRemovePhoto style={styles.UploadFoto__Button__AddFoto}/>
                            :
                            <IconAddPhoto style={styles.UploadFoto__Button__AddFoto}/>

                        }
                        {/* <Button style={styles.UploadFoto__Button__AddFoto} type="icon" icon="add-foto"/> */}
                    </TouchableOpacity>
                    <Text style={styles.TextName}>{fullName}</Text>
                    <Text style={styles.TextProfesi}>{pekerjaan}</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" disabled={!hasFoto} onPress={handleUpload}/>
                    <Gap height={20}/>
                    <Link title="Skip for this" align="center" onPress={()=>navigation.navigate('Main')}/>
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
        width:130,
        borderRadius:130/2
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
