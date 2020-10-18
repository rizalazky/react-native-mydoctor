import React,{useState} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker'
// import { Image } from 'react-native-svg'

import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { Colors, Fonts } from '../../utils'

const UploadFoto = ({navigation,route}) => {

    const {fullName,pekerjaan}=route.params
    const [photo,setPhoto]=useState(ILNullPhoto)

    const handlePress=()=>{
        console.log('test')
        // ImagePicker.launchImageLibrary((response) => {
        //     // Same code as in above section!
        //     console.log(response)
        //     console.log('tet')
        // });
        ImagePicker.showImagePicker((response) => {
            console.log('Response = ', response);
          
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
                
              setPhoto(source)
            }
          });
    }

    return (
        <View style={styles.UploadFoto}>
            <Header title='Upload Foto' onPress={()=>navigation.goBack()}/>
            <View style={styles.UploadFoto__Content}>
                <View style={styles.UploadFoto__Content__Image}>
                    <TouchableOpacity style={styles.UploadFoto__Content__Image__Wrapper} onPress={handlePress}>
                        <Image source={photo} style={styles.Avatar}/>
                        <IconAddPhoto style={styles.UploadFoto__Button__AddFoto}/>
                        {/* <Button style={styles.UploadFoto__Button__AddFoto} type="icon" icon="add-foto"/> */}
                    </TouchableOpacity>
                    <Text style={styles.TextName}>{fullName}</Text>
                    <Text style={styles.TextProfesi}>{pekerjaan}</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" />
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
