import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.topText}>
        Welcome to the App
      </Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 75 }}>
        <Image
          source={{ uri: 'koko1.png' }} // replace with your image URL
          style={styles.image}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View
            style={{
              backgroundColor: 'plum',
              width: 170,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Login
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'lightblue',
              width: 170,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topText: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 75,
  },
  image: {
    width: 350,
    height: 350,
  },
});
export default App