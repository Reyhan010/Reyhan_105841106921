import { View, Text, Image } from 'react-native'
import React from 'react'
import HomeAktif from './assets/icons/homeAktif.jpg';
import HomeNonAktif from './assets/icons/homeInaktif.jpg';
import ShopAktif from './assets/icons/shopAktif.jpg';
import ShopNonAktif from './assets/icons/shopInaktif.jpg';
import bagAktif from './assets/icons/bagAktif.jpg';
import bagInaktif from './assets/icons/bagInaktif.jpg';
import loveAktif from './assets/icons/loveAktif.jpg';
import loveInaktif from './assets/icons/loveInaktif.jpg';
import profileAktif from './assets/icons/profileAktif.jpg';
import profileInaktif from './assets/icons/profileInaktif.jpg';
import HomeScreen from './HomeScreen';
import ProfileStackScreen from './Profile';
import LoginPage from './components/Login';
import Shop from './Shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
          options={{
            headerShown:false, tabBarIcon:({focused}) => (
            <Image source={focused ? HomeAktif : HomeNonAktif} style={{width:30, height:30}} />
          )
        }}
        />
          <Tab.Screen name="Shop" component={Shop}
          options={{
            headerShown:false, tabBarIcon:({focused}) => (
            <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
          )
        }}
        />
        <Tab.Screen name="bag" component={Shop}
          options={{
            headerShown:false, tabBarIcon:({focused}) => (
            <Image source={focused ? bagAktif : bagInaktif} style={{width:30, height:30}} />
          )
        }}
        />
        <Tab.Screen name="love" component={Shop}
          options={{
            headerShown:false, tabBarIcon:({focused}) => (
            <Image source={focused ? loveAktif : loveInaktif} style={{width:30, height:30}} />
          )
        }}
        />
        <Tab.Screen name="profile" component={ProfileStackScreen}
          options={{
            headerShown:false, tabBarIcon:({focused}) => (
            <Image source={focused ? profileAktif : profileInaktif} style={{width:30, height:30}} />
          )
        }}
        />
        
        </Tab.Navigator>
  )
}

export default MyTabs
