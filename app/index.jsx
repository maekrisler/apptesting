import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from 'expo-router';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>            
            <Link href="/login" style={{ color: 'blue', textDecorationLine: 'underline' }}>
            Login Here
            </Link>

            <Link href="/signup" style={{ color: 'blue', textDecorationLine: 'underline' }}>
            Sign Up Here </Link>

            <Link href="/viewprofile" style={{ color: 'blue', textDecorationLine: 'underline' }}>
            View Videos </Link>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})