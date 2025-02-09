import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" size={29} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="eye-sharp" size={29} color={color} />,
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" size={29} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="people-circle-sharp" size={29} color={color} />,
        }}
      />

      {/* <Tabs.Screen
        name="admin"
        options={{
          title: "Admin",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="construct" size={36} color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
