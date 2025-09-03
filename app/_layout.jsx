// layout wraps every page automatically 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
  return (
    <>

    <StatusBar value="auto" />
    <Stack>
        <Stack.Screen name = "(auth)" options= {{ headerShown: false }} /> 
        <Stack.Screen name = "(dashboard)" options= {{ headerShown: false }} />   
          
        <Stack.Screen name="index" options={{ title: 'Home' }} />
    </Stack>
      
    </>  // can have components to mask file name
  )
}

export default _layout

const styles = StyleSheet.create({})
