import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { useUser } from "@clerk/clerk-react";
import { useNavigation } from "@react-navigation/native";
import { GiftedChat } from "react-native-gifted-chat";
import moment from "moment/moment";

export default function ChatScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { user } = useUser();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulating fetching user details (like from Firebase)
    GetUserDetails();
  }, []);

  // Simulated function to set chat details, can be replaced with real data
  const GetUserDetails = () => {
    // Simulated user and chat details logic
    const otherUserName = "Jane Doe"; // Replace with logic to get other user details
    navigation.setOptions({
      headerTitle: otherUserName,
    });

    // Example of setting some initial messages
    const initialMessages = [
      {
        _id: 1,
        text: "Hello! How are you?",
        createdAt: moment().subtract(1, 'days').toDate(),
        user: {
          _id: 2, // User ID for the other person
          name: "Jane Doe",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "I'm good, thanks! How about you?",
        createdAt: moment().subtract(1, 'day').toDate(),
        user: {
          _id: user?.primaryEmailAddress?.emailAddress,
          name: user?.fullName,
          avatar: user?.imageUrl,
        },
      },
    ];

    setMessages(initialMessages); // Set initial messages
  };

  const onSend = (newMessage) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessage));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      showUserAvatar={true}
      user={{
        _id: user?.primaryEmailAddress?.emailAddress,
        name: user?.fullName,
        avatar: user?.imageUrl,
      }}
    />
  );
}
