import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatsPage from '../pages/ChatsPage';
import { Crown, Group, MessageCircle, Settings, User2, Bell } from 'lucide-react-native';
import GroupsPage from '../pages/GroupsPage';
import FavoritesPage from '../pages/FavoritesPage';
import ContactsPage from '../pages/ContactsPage';
import SettingsPage from '../pages/SettingsPage';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageScreen from '../pages/MessageScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ChatTab = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTintColor: 'black', headerShadowVisible: false }}>
            <Stack.Screen options={{
                headerTitle: '',
                headerShadowVisible: false,
                headerLeft: () => (
                <Text style={tw`text-base font-bold uppercase`}>Messages</Text>
                ),
                headerRight: () => (
                <TouchableOpacity style={tw`shadow-lg p-1 bg-gray-100 rounded-full`}>
                    <Bell  size={21} color='black' />
                </TouchableOpacity>
                )
            }} name='ChatsScreen' component={ChatsPage} />
            <Stack.Screen name='MessageScreen' component={MessageScreen} />
        </Stack.Navigator>
    )
}

const Chats = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#000000', tabBarInactiveTintColor: "rgba(0,0,0,0.5)" }}>
            <Tab.Screen options={{
                title: 'Chats',
                tabBarIcon: ({ color, size }) => (
                    <MessageCircle size={size} color={color} />
                )
            }} name='ChatsPage' component={ChatTab} />
            <Tab.Screen options={{
                title: 'Groups',
                tabBarIcon: ({ color, size }) => (
                    <Group size={size} color={color} />
                )
            }} name='GroupsPage' component={GroupsPage} />
            <Tab.Screen options={{
                title: 'Contacts',
                tabBarIcon: ({ color, size }) => (
                    <User2 size={size} color={color} />
                )
            }} name='ContactsPage' component={ContactsPage} />
            <Tab.Screen options={{
                title: 'Favorites',
                tabBarIcon: ({ color, size }) => (
                    <Crown size={size} color={color} />
                )
            }} name='FavoritesPage' component={FavoritesPage} />
            <Tab.Screen options={{
                title: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <Settings size={size} color={color} />
                )
            }} name='SettingsPage' component={SettingsPage} />
        </Tab.Navigator>
    )
}

export default Chats

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})