import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const signup = () => {

    const handleSubmit = () => {
        console.log('signup info submitted')
    }

  return (
    <View>
        <Pressable 
            onPress={handleSubmit}
            style={({pressed}) => [styles.btn, pressed && styles.pressed]}> 
            <Text style={{ color: '#f2f2f2' }}> Register </Text>
        </Pressable>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'gray',
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8
    }
})