import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            position: 'absolute',
            top: 30,
            left: 30,
        }}>FASHION SALE</Text>
     <Image source={require('./assets/icons/sale.jpeg')} style={{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
     }} />
    </View>
  )
}

export default HomeScreen