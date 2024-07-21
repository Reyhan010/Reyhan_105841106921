import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './components/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabs from './MyTabs';
import ProfileStackScreen from './Profile';
import HomeScreen from './HomeScreen';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginPage'>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileStackScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App