import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILHospitalBG } from '../../assets/illustration'

const Hospitals = () => {
    return (
        <View >
            <View style={styles.Hospitals__Header}>
                <ImageBackground source={ILHospitalBG} style={{flex:1}}>
                    <Text>Nearby Hospitals</Text>
                    <Text>3 tersedia</Text>
                </ImageBackground>
            </View>
            <View>
                <View>
                    <Text>Rumah Sakit Citra Bunga Merdeka</Text>
                    <Text>jln surya Sejahtera 20</Text>
                </View>
                <View>
                    <Text>Rumah Sakit Citra Bunga Merdeka</Text>
                    <Text>jln surya Sejahtera 20</Text>
                </View>
                <View>
                    <Text>Rumah Sakit Citra Bunga Merdeka</Text>
                    <Text>jln surya Sejahtera 20</Text>
                </View>
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    Hospitals__Header:{
        
    }
})
