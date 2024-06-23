import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

export default function App() {
  const onPress = () => {
    console.log('clicked')
  }
  return (
    <View style={styles.container}>
      <CustomButton text='Click me' type='outlined' bordered size='small' onPress={onPress} />
      <CustomButton text='Click me' type='outlined' bordered onPress={onPress} />
      <CustomButton text='Click me' type='outlined' onPress={onPress} />
      <CustomButton text='Click me' size='small' onPress={onPress} />
      <CustomButton text='Click me' bordered onPress={onPress} />
      <CustomButton text='Click me' onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})