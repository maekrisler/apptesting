import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href="/"> Logout</Link>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})