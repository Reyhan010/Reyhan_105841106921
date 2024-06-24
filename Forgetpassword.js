import { StyleSheet,Text,View,Image,TextInput } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const TextInputCustom = ({name,Color,Password}) =>{
    return(
        <View style={{
            justifyContent:'center',
            alignItems:'center',
        }}>
            <TextInput
            placeholder={"Masukkan${name}"}
            style={{
                height:45,
                borderColor:'black',
                borderWidth:1,
                marginBottom:10,
                borderRadius:10,
                paddingLeft:10,
                width:300,
                color:color,
            }}
            />
        </View>
    )
}
const ButtonCostum = ({color,text}) =>{
    return(
        <View style={{backgroundColor:color,width:160,height:45,borderRadius:10,width:300,marginTop:10,alignItems:'center',justifyContent:'center',textAlign:'center',}}>
            <text style={{color:'white',fontSize:15}}>
                {text}
            </text>
        </View>
    );
};
const App = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.topText}>
                Forget Password
            </Text>
            <View style={styles.container}>
                <Text style={styles.topText1}>
                    Please, Enter your email address.You will receive a link to create a new password via email.
                </Text>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    marginBottom:270,
                }}>
                    <TextInputCustom name="Email" color="black"/>
                    <ButtonCostum color='violet' text="SEND"/>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'thistle',
        padding:70,
    },
    topText:{
        fontSize:30,
        textAlign:'center',
        marginBottom:10,
        fontWeight:'bold',
        marginRight:50,
    },
    topText1:{
        fontSize:15,
        textAlign:'center',
        marginTop:50,
    },

});
export default App