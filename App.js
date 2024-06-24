// Sign Up
// import { StyleSheet,Text,View,Image,TextInput } from "react-native";
// import React from "react";
// const TextInputCustom = ({name,color,Password}) =>{
//     return(
//         <View style={{
//             justifyContent:'center',
//             alignItems:'center'

//         }}>
//             <TextInput
//             placeholder={'Masukkan ${name}'}
//             style={{
//                 height:45,
//                 borderColor:'black',
//                 borderWidth:1,
//                 borderRadius:10,
//                 marginBottom:10,
//                 paddingLeft:10,
//                 width:300,
//                 color:color
//             }}
//             />
//         </View>
//     )
// }
// const ButtonCostum =({color,text}) =>{
//     return(
//         <View style={{backgroundColor:color,
//             width:160,
//             height:45,
//             alignItems:'center',
//             justifyContent:'center',
//             textAlign:'center',
//             borderRadius:10,
//             width:300,
//         }}>
//             <Text style={{color:'white',fontSize:20}}>
//                 {text}
//             </Text>
//         </View>
//     );
// };
// const App =() =>{
    
//     return(
//         <View style={style.container}>
//             <Text style={style.topText}>
//                 Sign Up
//             </Text>
//             <View style={{
//                 flex:1,
//                 justifyContent:'center',
//                 alignItems:'center',
//             }}>
//                 <TextInputCustom name="Username" color="black"/>
//                 <TextInputCustom name="Email" color="black"/>
//                 <TextInputCustom name="Password" color="black"/>
//                 <ButtonCostum color='violet' text="SignUp"/>
//                 <View style={style.container}>
//                     <Text style={style.topText1}>
//                         or Sign Up with social account
//                     </Text>
//                     <View style={{
//                         flex:1,
//                         justifyContent:'center',
//                         alignItems:'center',
//                         marginTop:75,
//                         flexDirection:'row',
//                     }}>
//                         <Image source={{uri:'goggle.png'}} style={styles.image}/>
//                         <Image source={{uri:'facebook.png'}} style={styles.image}/>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     )
// }

// const style = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'thistle',
//         padding:70,
//     },
//     topText:{
//         fontSize:50,
//         textAlign:'center',
//         marginRight:130,
//         marginBottom:120,
//         fontWeight:'bold',
//     },
//     topText1:{
//         fontSize:20,
//         textAlign:'center',
//     },
//     image:{
//         width:50,
//         height:50,
//         borderRadius:50,
//         marginBottom:10,
//         marginHorizontal:10
//     }
// })
// export default App

//forgetPasword
// 

//login
import { StyleSheet,Text,View,Image,TextInput } from "react-native";
import React from "react";
const TextInput = ({name,color,Password}) =>{
    return (
        <View style={{
            justifyContent:'center',
            alignItems:'center',
        }}>
            <TextInput
            placeholder={'Masukkan${name}'}
            style={{
                height:45,
                borderColor:'black',
                borderWidht:1,
                borderRadius:10,
                marginBottom:10,
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
        <View style={{
            backgroundColor:color,
            width:160,
            height:45,
            alignItems:'center',
            justifyContent:'center',
            textAlign:'center',
            borderRadius:10,
            width:300,
            marginTop:15
        }}>
            <Text style={{color:'black',fontSize:20}}>
                {text}
            </Text>
        </View>
    );
};
const App =()=>{
    return(
    <View style={style.container}>
        <Text style={styles.topText}>
            Login
        </Text>
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <TextInputCustom name="Email" color="black"/>
            <TextInputCustom name="Password" color="black"/>
            <ButtonCostum color='blue'text="Login"/>
            <Text style={styles.ForgetPasswordText}>
                Forget Password 
            </Text>
            <View View style={styles.container}>
                <Text style={styles.topText1}>
                    or sign up with social account
                </Text>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:75,
                    flexDirection:'row'
                }}>
                    <Image source={{uri:'goggle.png'}} style={style.Image}/>
                    <Image source={{uri:'facebook.png'}} style={style.Image}/>
                </View>
            </View>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        padding:70,
        
    },
    topText:{
        fontSize:50,
        textAlign:'center',
        marginRight:150,
        marginBottom:100,
        fontWeight:'bold',
    },
    topText1:{
        fontSize:20,
        textAlign:'center',
        marginTop:20,
    },
    ForgetPasswordText:{
        fontSize:15,
        textAlign:'center',
        color:'yellow',
        marginBottom:40,
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,
        marginHorizontal:5,
    }
})
export default App