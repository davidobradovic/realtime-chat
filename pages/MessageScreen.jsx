import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { chats } from '../fakedata/chats';
import { Check, CheckCheck, Cog } from 'lucide-react-native';
import tw from 'twrnc'
import { messages } from '../fakedata/messages';
import LottieView from 'lottie-react-native';

const MessageScreen = () => {

  const route = useRoute();
  const messageChannelId = route.params?.id;

  const messageUser = chats.filter((user) => user.id === messageChannelId)
  const messagesFromThisUser = messages.filter((msg) => msg.user_id === messageChannelId)

  const navigation = useNavigation();

  navigation.setOptions({
    title: `${messageUser.map((user) => user.user_username)}`,
    headerRight: () => (
      <TouchableOpacity>
        <Cog size={20} />
      </TouchableOpacity>
    )
    
  })

  const MessageComponent = ({message_text, message_status}) => {
    return (
      <View style={[tw`p-1 bg-gray-50 mb-1 rounded `, { maxWidth: '70%'}]}>
        {
          messageUser.map((user) => {
            return (
              <View key={user.id} style={[tw`w-full flex-row items-center pb-1`, { borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.05)' }]}>
                <Image style={[tw`rounded-full mr-2` ,{ width: 20, height: 20 }]} source={{ uri: user.user_image }} />
                <Text style={[ {fontSize: 10} ]}>{user.user_username}</Text>
              </View>
            )
          })
        }
        <View style={[ tw`p-1 relative` ]}>
          <Text style={[ {fontSize: 11.5, } ]}>{message_text}</Text>
          { message_status === "sent" ? (<Check style={[ tw`absolute bottom-0 right-0` ]} size={11} color='black' />) : 
            message_status === "delivered" ?  (<CheckCheck style={[ tw`absolute bottom-0 right-0` ]} size={11} color='black' />) :
            (<CheckCheck style={[ tw`absolute bottom-0 right-0` ]} size={11} color='blue' />)
          }
        </View>
      </View>
    )
  }

  return (
    <View style={[ styles.container, tw`bg-white p-3 relative` ]}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={messagesFromThisUser}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MessageComponent message_text={item.message} message_status={item.messageStatus} />}
      />
      {/* {
        messageUser.map((user) => user.status === "writting" ? (
          <View key={user.id} style={[tw`w-full flex items-center justify-center absolute bottom-5 bg-gray-100 right-5 shadow-md rounded-full`, { height: 50, width: 50 }]}>
            <LottieView source={require('../assets/lottie/animation_lm98y2ii.json')} autoPlay loop style={[ tw`rounded-full `, { width: 90, height: 30 } ]} />
            </View>
        ) : null )
      } */}


    </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})