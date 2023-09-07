import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation();

    function handleLogin () {
        navigation.replace('Chats')
    }

  return (
    <SafeAreaView style={[styles.container, tw`bg-white`]}>
      <Text style={[tw`text-xl font-bold mb-10 uppercase`]}>Realtime chat App</Text>

      <View style={[styles.authForm ,tw`flex gap-2`]}>
        <TextInput 
            style={[styles.authFormInput, tw`bg-gray-100 p-3 rounded text-black text-xs`]}
            keyboardAppearance='dark'
            keyboardType='email-address'
            placeholder='Enter your email'
        />
        <TextInput 
            secureTextEntry
            style={[styles.authFormInput, tw`bg-gray-100 p-3 rounded text-black text-xs`]}
            keyboardAppearance='dark'
            keyboardType='default'
            placeholder='Enter your password'
        />

        <TouchableOpacity onPress={handleLogin} style={[ tw`bg-blue-600 p-3 rounded flex items-center justify-center` ]}>
            <Text style={[ tw`text-white` ]}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={tw` absolute bottom-10 flex-row items-center justify-center`}>
        <Text style={tw`text-black text-xs`}> You dont have account ? </Text>
        <TouchableOpacity style={tw`flex items-center justify-center bg-black p-1 rounded`}>
            <Text style={tw`text-blue-500 text-xs`}>Sign Up</Text>
        </TouchableOpacity> 
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authForm: {
        width: '60%'
    }
})