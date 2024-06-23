import { StyleSheet, Text, View,  SafeAreaView,  Image,TouchableHighlight } from 'react-native'
import React from 'react' 

export default function Welcome( {navigation}) {
    const image = { uri: "https://cdn3d.iconscout.com/3d/premium/thumb/man-shopping-online-using-e-commerce-app-7129328-5791999.png?f=webp" };
    // function Login() {
    //     console.log("Login")
    // }
    // function Register() {
    //     console.log("Register")
    // }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.welcome}>
                <Text style={styles.Titletext}>Welcome</Text>
                <Text style={styles.Text}>Get started with our Shopping app</Text>
            </View>
            <View style={styles.button1}>
                <TouchableHighlight style={{backgroundColor: '#8a2be2' ,width : 270,height: 50,justifyContent:'center',alignItems: 'center',borderRadius:30,marginBottom: 20}} onPress={()=> navigation.navigate('Login')}>
                    
                    <Text style={{color: 'white',fontSize: 19,fontWeight:'bold'}}>login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{backgroundColor: '#4676ff' ,width : 270,height: 50,justifyContent:'center',alignItems: 'center',borderRadius:30}} onPress={()=> navigation.navigate('Register')}>
                    
                    <Text style={{color: 'white',fontSize: 19,fontWeight:'bold'}}>Register</Text>
                </TouchableHighlight>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: "center",
        width: 300,
        height: 300,
    },
    button1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        
        
    },
    welcome: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Titletext: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',

    }
})