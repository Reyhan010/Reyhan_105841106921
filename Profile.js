import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My profile</Text>
            </View>
            <View style={styles.profileInfo}>
                <Image source={{ uri: 'https://images.genius.com/63dee9fa14188db7adb58a996e25a757.720x720x1.jpg' }}style={styles.profileImage} />
                <Text style={styles.profileName}>Koko</Text>
                <Text style={styles.profileEmail}>kokoMelon@gmail.com</Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>My Orders</Text>  
                    <Text style={styles.menuItemSubText}>Already have 24 Orders</Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Promocodes</Text>  
                    <Text style={styles.menuItemSubText}>Cintai sepenuh hati</Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Shipping addresses</Text>  
                    <Text style={styles.menuItemSubText}>Antang Punk</Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Payment methods</Text>  
                    <Text style={styles.menuItemSubText}>Dana : 089685997265</Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>My reviews</Text>  
                    <Text style={styles.menuItemSubText}>Reviews for 5 items </Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Settings</Text>  
                    <Text style={styles.menuItemSubText}>Notifications</Text>
                </View>
        </ScrollView>
    );
}

const ProfileStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
             name="Profile"
             component={ProfileScreen}
            options={{ headerShown: false }}
             />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    header:{
        padding: 20,
    },
    headerText:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileInfo:{
        alignItems: 'center',
        marginVertical: 20, 
    },
    profileImage:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    profileEmail:{
        fontSize: 16,
        color: 'gray',
    },
    menuItem:{
        padding: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    menuItemText:{
        fontSize: 18,
    },
    menuItemSubText:{
        color: 'gray',
    },
});

export default ProfileStackScreen;

