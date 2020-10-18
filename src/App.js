import React from 'react'
import FlashMessage from 'react-native-flash-message'
import Router from './router'


export default function App() {
  return (
    <>
      <Router/>
      <FlashMessage position='top'/>
    </>
  )
}


