import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

// theme the login page
// replace pressable with button component

const login = () => {

    const handleSubmit = () => {
        console.log('login info submitted')
    }

  return (
    <View>
        <Text> Login to Your Account </Text>

        <Pressable 
            onPress={handleSubmit}
            style={({pressed}) => [styles.btn, pressed && styles.pressed]}> 
             <Text style={{ color: '#f2f2f2' }}> Login </Text>
        </Pressable>
    

        <Link href='/signup'>
        <Text style={{ textAlign: 'center'}}> 
            Sign Up Instead </Text>
        </Link>


    </View>
  )
}

export default login

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