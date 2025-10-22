import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { Tabs } from 'expo-router';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'; // This line is causing the error
import { Text, View } from 'react-native'
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center mt-5">
              <FontAwesome
                icon={faHouse as any} 
                size={22} 
                color={focused ? 'rgba(255, 237, 132, 1)' : '#6b7280'}
              />
              <Text 
                className={`text-xs mt-1 ${focused ? 'text-yellow-300' : 'text-gray-500'}`}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center mt-5 ">
              <FontAwesome
                icon={faUser} 
                size={22} 
                color={focused ? 'rgba(255, 237, 132, 1)' : '#6b7280'}
              />
              <Text 
                className={`text-xs mt-1 ${focused ? 'text-yellow-300' : 'text-gray-500'}`}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}