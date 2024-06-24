import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import Register from './Screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './Screens/Button';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen
            name="Home"
            component={Welcome}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
      // <Button/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
