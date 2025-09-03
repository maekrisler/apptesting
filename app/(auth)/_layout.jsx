import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
  return (
    <>

        <StatusBar value="auto" />
        <Stack.Screen name = "(auth)" options= {{ headerShown: false }} /> 
        <Stack.Screen name = "(dashboard)" options= {{ headerShown: false }} />   
  
    </>
  )
}