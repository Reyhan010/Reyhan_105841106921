// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const App = () =>{
//   return(
//     <view style={{flex:1}}>
//       <view style={{flexDirection:"row", flex:1, alignItems:"flex-end",
//         justifyContent:"center", marginLeft:8, marginRight:8, marginBottom:40,
//       }}>
//         <view style={{
//           backgroundColor:"red", width:180, height:80,justifyContent:"center",
//           borderRadius:10,
//         }}>
//           <Text style={{
//             fontSize:30,color:"white",
//             textAlign:"center",
//             fontWeight:"bold",
//           }}>
//             login
//           </Text>
//         </view>
//         <view style={{backgroundColor:"blue",width:180,height:80,
//         justifyContent:"center",
//         borderRadius:10,
//         marginLeft:8,
//         }}>
//           <Text style={{
//             fontSize:30,color:"white",
//             textAlign:"center",
//             fontWeight:"bold",
//           }}>
//             Register
//           </Text>
//         </view>
//       </view>
//     </view>
//   )
// }
// TUGAS 3
import { StyleSheet,Text,View,Image } from "react-native";
import React from "react";
import { isWhiteSpaceLike } from "typescript";

const App = () =>{
    return (
    //    #< style={{backgroundColor:'blue',height:'100%'}}>
        <View style={{flex: 1,backgroundColor:'black'}}>
        <Text style={styles.topText}>
                Welcome to my
            </Text>
            <Text style={styles.topTextt}>
                Cafe
                </Text>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:50}}>
               <Image source={{ uri:'koko1.png'}}
               style={styles.image}>
               </Image>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',marginBottom:10}}>
                <View style={{flexDirection:'row',marginBottom:10}}>
                    <View style={{
                        backgroundColor:'indigo',
                        width:160,
                        height:50,
                        alightItems:'center',
                        justifyContent:'center',
                        marginRight:10,
                        borderRadius:20,
                    }}>
                       <Text style={{
                         fontFamily:'Times New Roman,Times,serif',
                        fontSize:15,
                        color:'white',
                        fontWeight:'bold',
                        textAlign:'center',
                       }}>
                        login
                       </Text>

                    </View>
                    <View style={{
                        backgroundColor:'#32012f',
                        width:160,
                        height:50,
                        justifyContent:'center',
                        alignItems:'center',
                        marginLeft:10,
                        borderRadius:20,
                    }}>
                        <Text style={{
                             fontFamily:'Times New Roman,Times,serif',
                            fontSize:15,
                            color:'white',
                            textAlign:'center',
                            fortWeight: 'bold',

                        }}>
                            Sign Up
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        
        
    );
};

const styles= StyleSheet.create({
    topText:{
        color:'indigo',
        fontFamily:'Times New Roman,Times,serif',
        fontSize:45,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:75,
    },
    topTextt:{
        color:'indigo',
        fontFamily:'Times New Roman,Times,serif',
        fontSize:45,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:0,

    },
    image:{
        width:300,
        height:200,
        borderRadius: 50
    },

});

export default App;
