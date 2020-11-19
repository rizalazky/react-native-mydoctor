import React from 'react'
import { LogBox } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import { Provider,useSelector } from 'react-redux'
import { Loading } from './components'
import store from './redux/Store'
import Router from './router'


const MainApp=()=>{
  const stateGlobal=useSelector(state => state)
  LogBox.ignoreLogs(['Setting a timer'])
  return(
    <>
      <Router/>
      <FlashMessage position='top'/>
      {
        stateGlobal.isLoading && <Loading/>
      }
    </>
  )
}

export default function App() {
  
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}


