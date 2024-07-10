import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

const TextInputCustom = ({ name, color, }) => {
    return (
        <TextInput
            placeholder={`Masukkan ${name}`}
            style={{

                height: 45,
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 10,
                marginBottom: 10,
                paddingLeft: 10,
                width: '90%',
                color: color,
                shadowColor: 'black',
                shadowRadius: 1,
                shadowOpacity: 0.2,
            }}
        />

    )
}
const ButtonCostum = ({ color, text }) => {
    return (
        <View style={{
            backgroundColor: color,
            width: '90%',
            height: 45,
            justifyContent: 'center',
            borderRadius: 10,
            width: '90%',
            alignItems:'center'
        }}>
            <Text style={{ color: 'white', fontSize: 20 }}>
                {text}
            </Text>
        </View>
    );
};


const Login = () => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                width: '100%',
                paddingLeft: 14,
                top: 26,
            }}>
                <Text style={{
                    fontSize: 34,
                    lineHeight: 34,
                    fontFamily: 'MetroBold',
                    textAlign: 'center',
                }}>Login</Text>
            </View>
            <View style={{
                flex: 1,
                width: '100%',
                height: 'auto',
                bottom: 31,
                alignItems: 'center',
                alignSelf: 'center',
                fontFamily: 'Metro-Medium',
                bottom:30
            }}>
                <TextInputCustom name='Email' color='blqck' />
                <TextInputCustom name='Password' color='black' />
            </View>
            <View style={{
                bottom: 70,
            }}>
                <Text style={{
                    color: 'blue',
                    alignSelf: 'flex-end',
                    right: 30,
                    fontFamily: 'MetroSemi',
                }}>Forget Password</Text>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                bottom: 90,
                width: '100%',
                fontFamily: 'MetroBlack'
            }}>
                <ButtonCostum color='blue' text='LOGIN' />
            </View>

            <View style={{
                alignSelf: 'center',
                bottom: 36,
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'MetroLight',
                }}>Or sign up with social account</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                columnGap: 10,
                alignSelf: 'center',
                bottom: 20,
            }}>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 10
                }}>
                    <Image source={require('../assets/goggle.png')} 
                    style={{
                        width:30,
                        height:50,
                        resizeMode:'contain'
                    }}
                        />
                </View>

                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 10,
                }}>
                    <Image source={require('../assets/facebook.png')}
                    style={{
                        width:45,
                        height:50,
                        resizeMode:'contain'
                    }}
                    />

                </View>
            </View>
        </View>
    )
}
export default Login;
