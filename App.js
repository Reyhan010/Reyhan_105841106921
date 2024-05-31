// TUGAS 1
import { StyleSheet, View } from "react-native";
import React from "react";

const App = () =>{
    return(
        <View style={{flex:1}}>
            <View style={{flex:1,flexDirection:'row',backgroundColor:'white'}}>
                <View style={{flex:1,backgroundColor:'red'}}>

                </View>
                <View style={{
                    flex:1,
                    backgroundColor:'yellow'
                }}>
                    
                </View>
            </View>
            <View style={{
                    flex:1,
                    backgroundColor:'green'
                }}>
                    
                </View>
                <View style={{
                    flex:1,
                    backgroundColor:'yellow'
                }}>
                    
                </View>
        </View>
    )
}
export default App;


// // TUGAS 3
// import { StyleSheet,Text,View,Image } from "react-native";
// import React from "react";
// import { isWhiteSpaceLike } from "typescript";

// const App = () =>{
//     return (
//     //    #< style={{backgroundColor:'blue',height:'100%'}}>
//         <View style={{flex: 1,backgroundColor:'black'}}>
//         <Text style={styles.topText}>
//                 Welcome to my
//             </Text>
//             <Text style={styles.topTextt}>
//                 Cafe
//                 </Text>
//             <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:50}}>
//                <Image source={{ uri:'koko1.png'}}
//                style={styles.image}>
//                </Image>
//             </View>
//             <View style={{flex:1,alignItems:'center',justifyContent:'center',marginBottom:10}}>
//                 <View style={{flexDirection:'row',marginBottom:10}}>
//                     <View style={{
//                         backgroundColor:'indigo',
//                         width:160,
//                         height:50,
//                         alightItems:'center',
//                         justifyContent:'center',
//                         marginRight:10,
//                         borderRadius:20,
//                     }}>
//                        <Text style={{
//                          fontFamily:'Times New Roman,Times,serif',
//                         fontSize:15,
//                         color:'white',
//                         fontWeight:'bold',
//                         textAlign:'center',
//                        }}>
//                         login
//                        </Text>

//                     </View>
//                     <View style={{
//                         backgroundColor:'#32012f',
//                         width:160,
//                         height:50,
//                         justifyContent:'center',
//                         alignItems:'center',
//                         marginLeft:10,
//                         borderRadius:20,
//                     }}>
//                         <Text style={{
//                              fontFamily:'Times New Roman,Times,serif',
//                             fontSize:15,
//                             color:'white',
//                             textAlign:'center',
//                             fortWeight: 'bold',

//                         }}>
//                             Sign Up
//                         </Text>
//                     </View>
//                 </View>
//             </View>
//         </View>
        
        
//     );
// };

// const styles= StyleSheet.create({
//     topText:{
//         color:'indigo',
//         fontFamily:'Times New Roman,Times,serif',
//         fontSize:45,
//         fontWeight:'bold',
//         textAlign:'center',
//         marginTop:75,
//     },
//     topTextt:{
//         color:'indigo',
//         fontFamily:'Times New Roman,Times,serif',
//         fontSize:45,
//         fontWeight:'bold',
//         textAlign:'center',
//         marginTop:0,

//     },
//     image:{
//         width:300,
//         height:200,
//         borderRadius: 50
//     },

// });

// export default App;
