import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { G } from 'react-native-svg'
import { Gap } from '../../components/atoms'
import { DoctorCategory, HomeProfile, NewsItem,RatedDoctor } from '../../components/molekuls'
import { Fonts,Colors } from '../../utils'

const Doctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={30}/>
                    <HomeProfile onPress={()=>navigation.navigate('UserProfile')}/>
                    <Gap height={30}/>
                    <Text style={styles.text}>Mau konsultasi dengan siapa hari ini?</Text>
                    <Gap height={16}/>
                    <View style={{flexDirection:"row"}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <DoctorCategory onPress={()=>navigation.navigate('ListDoctor')} icon="DokterUmum" label="Dokter Umum"/>
                            <DoctorCategory onPress={()=>navigation.navigate('ListDoctor')} icon="Psikater" label="Psikater"/>
                            <DoctorCategory onPress={()=>navigation.navigate('ListDoctor')} icon="DokterObat" label="Dokter Obat"/>
                            <DoctorCategory onPress={()=>navigation.navigate('ListDoctor')} icon="DokterObat" label="Dokter Obat"/>
                            <DoctorCategory onPress={()=>navigation.navigate('ListDoctor')} icon="DokterObat" label="Dokter Obat"/>
                        </ScrollView>
                    </View>
                    <Gap height={30}/>
                    <Text style={styles.text}>Top Rated Doctors</Text>
                    <RatedDoctor onPress={()=>navigation.navigate('DoctorProfile')}/>
                    <RatedDoctor onPress={()=>navigation.navigate('DoctorProfile')}/>
                    <RatedDoctor onPress={()=>navigation.navigate('DoctorProfile')}/>
                    <Gap height={30}/>
                    <Text style={styles.text}>Goos News</Text>
                    <Gap height={16}/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <Gap height={30}/>
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page:{
        backgroundColor:Colors.secondary 
    },
    container:{
        paddingHorizontal:16,
        backgroundColor:Colors.white,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    text:{
        fontSize:20,
        fontFamily:Fonts.NunitoSemiBold,
        color:Colors.dark1,
        maxWidth:209
    },flexRow:{
        flexDirection:"row",
    }
})
