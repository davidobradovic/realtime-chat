import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './stacks/Home';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import Chats from './stacks/Chats';
import tw from 'twrnc'
import { Bell } from 'lucide-react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        <Stack.Screen options={{ 
          headerShown: false,
          headerShadowVisible: false
        }} name='Chats' component={Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App