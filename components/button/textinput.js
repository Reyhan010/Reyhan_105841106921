import { StyleSheet,Text,View,Image,TextInput } from "react-native";
import React from "react";
import { isWhiteSpaceLike } from "typescript";

const TextInput = ({name, color }) =>{
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            
        </View>
        <TextInput
        placeholder={'Masukkan ${name}'}
        style={{
            height: 40,
            width:200,
            borderBlockColor:'gray',
            borderWidth:1,
            borderRadius:10,
            paddingLeft:10,
            color:color
            
        }} 
        
        />
    )
}

return (
    <view style={{

    }}
)

export defaul App;