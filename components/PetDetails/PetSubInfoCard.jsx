import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function PetSubInfoCard({ icon, title, value }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        padding: 5,
        margin: 5,
        borderRadius: 8,
        gap: 10,
        flex: 1,
      }}
    >
      <Image
        source={{ uri: icon }}
        style={{
          width: 40,
          height: 40,
        }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 16,
            color: Colors.GRAY,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}