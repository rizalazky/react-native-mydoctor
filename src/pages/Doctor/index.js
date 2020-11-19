import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { Gap } from '../../components/atoms'
import { DoctorCategory, HomeProfile, NewsItem,RatedDoctor } from '../../components/molekuls'
import { Fonts,Colors } from '../../utils'
import {Firebase} from '../../config'

const Doctor = ({navigation}) => {

    const [doctorCategories,setDoctorCategories]=useState([])
    const [topRatedDoctor,setTopRatedDoctor]=useState([])
    let data=[]
    useEffect(()=>{
        getDoctorCategoriees()
        getTopRatedDoctor()
        console.log('topRated',topRatedDoctor)
    },[])

    const getDoctorCategoriees=()=>{
        Firebase.database().ref('doctor_categories').once('value')
        .then(res=>{
            if(res.val()){
                setDoctorCategories(res.val())
            }
        })
        // console.log(doctorCategories)
    }

    const getTopRatedDoctor=()=>{
        let result={}    
        Firebase.database()
        .ref('list_doctor')
        .orderByChild('rating')
        .limitToLast(3)
        .once('value')
        .then(res=>{
            let dataaa=[]
            // console.log('resval',res.val())
            // Object.values(res.val()).map(data=>{
            //     Firebase.database()
            //     .ref('doctor_categories/'+data.doctorCategoryId)
            //     .once('value')
            //     .then(response=>{
            //         let dataFix=data
            //         dataFix.spesialis=response.val().desc
            //         console.log('dataFix',dataFix)
            //         dataaa.push(dataFix)
            //         console.log('dataa',dataaa)
            //         // setTopRatedDoctor(oldData=>[...oldData,dataFix])

            //     })
            // })  
            setTopRatedDoctor(res.val())
            console.log('top rated',topRatedDoctor)    
        })

    }

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
                            
                            {
                                
                                Object.values(doctorCategories).map(data=>{
                                    return(
                                        <DoctorCategory key={data.id} onPress={()=>navigation.navigate('ListDoctor',{id_cat:data.id,titleHeader:data.desc})} label={data.desc}/>
                                    )
                                })
                            }
                            
                        </ScrollView>
                    </View>
                    <Gap height={30}/>
                    <Text style={styles.text}>Top Rated Doctors</Text>
                    {
                        Object.values(topRatedDoctor).map((topRated)=>{
                            return(
                                <RatedDoctor doctorName={topRated.doctorName}
                                 key={topRated.id}
                                 spesialis={topRated.spesialis} 
                                 imageSource={{uri:topRated.image}}
                                 rate={topRated.rating}
                                 onPress={()=>navigation.navigate('DoctorProfile',{topRated})}/>
                            )
                        }
                        )
                    }
                    {/* {
                        topRatedDoctor.map(topRated=>{
                            // console.log('topRated',topRated)
                            return(
                                <RatedDoctor doctorName={topRated.doctorName}
                                 key={topRated.id}
                                 spesialis={topRated.spesialis} 
                                 imageSource={{uri:topRated.image}}
                                 rate={topRated.rating}
                                 desc={topRated.spesialis}
                                 onPress={()=>navigation.navigate('DoctorProfile')}/>
                            )
                        })
                    } */}
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
