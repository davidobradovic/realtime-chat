import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { chats } from '../fakedata/chats'
import { messages } from '../fakedata/messages'
import { useNavigation } from '@react-navigation/native'


const ChatComponent = ({ id, user_image, user_username, user_last_message, user_status, user_account_status }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MessageScreen', {id: id})} activeOpacity={0.8} style={tw`bg-gray-50 mb-1.5 rounded-full p-1 flex-row items-center`}>
      <Image source={{ uri: user_image }} style={[ tw`rounded-full mr-2` ,{ width: 50, height: 50 }]} />
      <View>
        <Text style={[ {fontSize: 11} ,tw`font-semibold mb-1`]}>{user_username}</Text>
        <Text style={[ {fontSize: 9} ,tw`font-light text-gray-400`]}>{user_status === "writting" ? "typing..." : messages.filter((msg) => msg.user_id === id).map((msg) => msg.message).slice(-1)}</Text>
      </View>
      <View style={[ styles.activeIndicator ,user_account_status === "online" ? { backgroundColor: '#a1de78' } : { backgroundColor: 'red' }, tw`absolute right-5 rounded-full` ]} ></View>
    </TouchableOpacity>
  )
}

const ChatsPage = () => {
  return (
    <View style={[styles.container ,tw`bg-white px-4 pt-4`]}>
      <FlatList 
        data={chats}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ChatComponent id={item.id} user_image={item.user_image} user_account_status={item.accountStatus} user_username={item.user_username} user_status={item.status} />}
      />
    </View>
  )
}

export default ChatsPage

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    activeIndicator: {
      width: 10, 
      height: 10,
    }
})