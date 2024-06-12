import { StyleSheet,Text,View,Image } from "react-native";
import React from "react";

const ButtonCostum = ({ color, text }) => {
    return (
        <View style={{
            backgroundColor: color,
            width:160,
            height:50,
            justifyContent:'center',
            marginLeft:10,
            borderRadius:20,
        }}>
            <Text style={{
                 fontFamily:'Times New Roman,Times,serif',
                fontSize:15,
                color:'white',
                textAlign:'center',
                fortWeight: 'bold',

            }}>{text}
                
            </Text>
        </View>

    )
}

export default ButtonCostum