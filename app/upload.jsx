import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const upload = () => {
  return (
    <View style={styles.container}>
      <Text>Upload Video</Text>
      <Link href="/"> Return to Home Page</Link>
    </View>
  )
}

export default upload

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})