import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap } from '../../components/atoms'
import { DoctorCategory, HomeProfile, NewsItem,RatedDoctor } from '../../components/molekuls'
import { Fonts,Colors } from '../../utils'

const Doctor = () => {
    return (
        <View style={styles.page}>
            <HomeProfile/>
            <Gap height={30}/>
            <Text style={styles.text}>Mau konsultasi dengan siapa hari ini?</Text>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <Text style={styles.text}>Top Rated Doctors</Text>
            <RatedDoctor/>
            <RatedDoctor/>
            <RatedDoctor/>
            <Text style={styles.text}>Goos News</Text>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page:{
        paddingVertical:16,
        paddingHorizontal:30
    },
    text:{
        fontSize:20,
        fontFamily:Fonts.NunitoSemiBold,
        color:Colors.dark1,
        maxWidth:209
    }
})
