import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

export default function Register({ navigation }) {
  const image = { uri: "https://cdn3d.iconscout.com/3d/premium/thumb/man-holding-sign-up-form-2937684-2426382.png" };
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
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


  function onChangeFirstName(text) {
    setFirstname(text);
  }
  function onChangeLastName(text) {
    setLastname(text);
  }
  function onChangeEmail(text) {
    setEmail(text);
  }
  function onChangePassword(text) {
    setPassword(text);
  }

  function Register() {
    console.log(firstname, lastname)
    console.log(email)
    console.log(password)
    validation()
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={image} style={{ width: 300, height: 300 }} />

      <View>
        <Text style={styles.title}>Register Page</Text>
      </View>

      <View style={styles.form}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <TextInput
              placeholder='First name'
              style={[styles.input, styles.name]}
              onChangeText={onChangeFirstName} value={firstname}
            />
          </View>
          <View>

            <TextInput
              placeholder='Last name'
              style={[styles.input, styles.name]}
              onChangeText={onChangeLastName} value={lastname}
            />
          </View>

        </View>
        <View>
          <TextInput
            placeholder='Email'
            style={styles.input}
            onChangeText={onChangeEmail} value={email}
          />
        </View>
        {
          error.email ? <Text style={styles.errortext}>{error.email}</Text> : null
        }

        <View>
          <TextInput
            style={styles.input} secureTextEntry={true}
            placeholder='Password'
            onChangeText={onChangePassword} value={password}
          />
        </View>
        {
          error.password ? <Text style={styles.errortext}>{error.password}</Text> : null
        }

        <View style={styles.button2}>
          <TouchableHighlight style={{ backgroundColor: '#4676ff', width: 270, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginBottom: 20 }} onPress={Register}>

            <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold' }}>Register</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>
            Already have an account?
          </Text>
          <Text onPress={() => navigation.navigate('Login')} style={{ fontWeight: 'bold', marginLeft: 6 }}>
            Login
          </Text>
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0daea",
    alignItems: 'center',
    width: 375

  },
  name: {
    width: 135
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: "center",
    width: 350
  },
  form: {
    marginTop: 40,
    alignItems: 'center'

  },
  input: {
    height: 40,
    width: 290,
    backgroundColor: "#fff",
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