import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function PetListItem({ pet }) {
  return (
    <View style={styles.container}>
      {/* Pet Image */}
      <Image source={pet.imageUrl} style={styles.image} resizeMode="cover" />

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{pet?.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {pet?.description}
        </Text>
      </View>

      {/* Age Text */}
      <Text style={styles.age}>{pet?.age || "N/A"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginRight: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: 150,
    height: 220,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "60%",
    borderRadius: 8,
  },
  textContainer: {
    marginTop: 8,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: "outfit-medium",
    color: Colors.BLACK,
  },
  description: {
    fontSize: 14,
    fontFamily: "outfit-regular",
    color: Colors.GRAY,
    marginTop: 5,
  },
  age: {
    fontSize: 14,
    fontFamily: "outfit-medium",
    color: Colors.PRIMARY,
    textAlign: "right",
    alignSelf: "flex-end",
    marginTop: 8,
  },
});
