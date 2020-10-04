import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GetStarted, Register, Splash,LogIn, UploadFoto, Doctor, Messages, Hospitals,ListDoctor } from '../pages'
import { TabNavigator } from '../components';



const Stack=createStackNavigator()
const Tab=createBottomTabNavigator()

const Main=()=>{
    return(
        <Tab.Navigator tabBar={props=><TabNavigator {...props}/>}>
            <Tab.Screen name="Doctor" component={Doctor}/>
            <Tab.Screen name="Messages" component={Messages}/>
            <Tab.Screen name="Hospitals" component={Hospitals}/>
        </Tab.Navigator>
    )
}


export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/>
                <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}}/>
                <Stack.Screen name="UploadFoto" component={UploadFoto} options={{headerShown:false}}/>
                <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
                <Stack.Screen name="ListDoctor" component={ListDoctor} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
