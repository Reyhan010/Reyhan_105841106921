
// TUGAS 3
// import { StyleSheet,Text,View,Image,TextInput } from "react-native";
// import React from "react";
// import { isWhiteSpaceLike } from "typescript";
// import ButtonCostum from "./components/button/button";

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
//                     <ButtonCostum color='violet' text='Login'/>
//                     <ButtonCostum color='red' text='SingOut'/>
                
//                     </View>
//                 </View>
//             </View>

        
        
        
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




//TUGAS 2

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const App = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor:'black'}}>
//       <View style={{ flexDirection: "row", 
//       flex: 1,
//       alignItems: "flex-end", //baris
//       justifyContent: "center", //kolom
//       marginLeft: 8, //jarak dari kiri
//       marginRight: 8, //jarak dari kanan
//       marginBottom: 40, //jarak dari bawah
//     }}>
//       <View style={{
//         backgroundColor: "red", width: 180, height: 80,
//         justifyContent: "center",
//         borderRadius: 50,
        
//       }}>
//         <Text style={{
//           fontSize: 30, color: "white",
//           textAlign: "center",
//           fontWeight: "bold",
//         }}>
//           Login
//         </Text>
//       </View>
//       <View style={{
//         backgroundColor: "blue", width: 180, height: 80,
//         justifyContent: "center",
//         borderRadius: 10,
//         marginLeft: 8,
//         borderRadius:50,
//       }}>
//          <Text style={{
//           fontSize: 30, color: "white",
//           textAlign: "center",
//           fontWeight: "bold",
//         }}>
//           Register
//         </Text>
//       </View>
//     </View>
//   </View>
//       )
//     }

// export default App;

import { StyleSheet,Text,View,Image,TextInput } from "react-native";
import React from "react";
import { isWhiteSpaceLike } from "typescript";
import ButtonCostum from "./components/button/button";

const App = () =>{
    const TextInputCostum = ({name, color}) =>{
        return(
<TextInput
        placeholder={`Masukkan ${name}`}
        style={{
            height: 50,
            width:400,
            borderBlockColor:'gray',
            borderWidth:1,
            borderRadius:10,
            paddingLeft:10,
            color:color,
            borderWidth:1,
            margin:10,
            
        }} 
        
        />
        )
    }

 return (
    <View style={{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    }}>
        <TextInputCostum name = "nama" color = 'black'></TextInputCostum>
        <TextInputCostum name = "Email"color = 'black'></TextInputCostum>
        <TextInputCostum name = "password"color = 'black'></TextInputCostum>
    </View>
 )
}

export default App

