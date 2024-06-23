import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableHighlight, Alert } from 'react-native'
import React, { useState } from 'react'

export default function Login({ navigation }) {
    const image = { uri: "https://cdn3d.iconscout.com/3d/premium/thumb/login-3025715-2526913.png?f=webp" };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({})

    const validation = () => {
        let error = {}

        if (!email) {
            error.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = 'Email is invalid.';
        }
        if (!password) error.password = "Password is required"

        setError(error)
        return Object.keys(error).length == 0;
    }

    function onChangeEmail(text) {
        setEmail(text);
    }
    function onChangePassword(text) {
        setPassword(text);
    }
    const Login = () => {
        console.log(email)
        console.log(password)
        validation()

    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={image} style={{ width: 300, height: 300 }} />
            <View>
                <Text style={styles.title}>Login Page</Text>
            </View>

            <View style={{ marginTop: 50 }}>
                <TextInput
                    placeholder='Enter your Email'
                    style={styles.input}
                    onChangeText={onChangeEmail} value={email}
                    required={true}
                />
            </View>
            {
                error.email ? <Text style={styles.errortext}>{error.email}</Text> : null
            }
            <View >
                <TextInput
                    style={styles.input} secureTextEntry={true}
                    placeholder='Enter your Password'
                    onChangeText={onChangePassword} value={password}
                />
            </View>
            {
                error.password ? <Text style={styles.errortext}>{error.password}</Text> : null
            }
            <View style={styles.button2}>
                <TouchableHighlight style={{ backgroundColor: '#8a2be2', width: 270, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginBottom: 20 }} onPress={Login}>

                    <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold' }}>login</Text>
                </TouchableHighlight>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>
                    Don't have an account?
                </Text>
                <Text onPress={() => navigation.navigate('Register')} style={{ fontWeight: 'bold', marginLeft: 6 }}>
                    Register
                </Text>
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#aface6",
        alignItems: 'center',
        width: 375

    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        width: 300,
        borderRadius: 10,
        overflow: 'hidden'


    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: "center",
        width: 300,
        height: 300,
    },
    input: {
        height: 40,
        width: 290,
        backgroundColor: "#DAD8FB",
        borderRadius: 10,
        paddingLeft: 20,
        margin: 8
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    button2: {
        marginTop: 10
    },
    errortext: {
        color: 'red'
    }
})