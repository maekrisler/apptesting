import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

const viewprofile = ({ navigation }) => {
  const handlePress = () => {
    // Navigate if navigation prop exists
    if (navigation && navigation.navigate) {
      navigation.navigate('Details');
    } else {
      alert('Navigation not available');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Page</Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>

    </View>
  );
};

export default viewprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  platformText: {
    fontSize: 14,
    color: '#555',
  },
});
