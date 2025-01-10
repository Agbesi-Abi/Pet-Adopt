import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function PetCard({ pet }) {
  return (
    <View style={styles.cardContainer}>
      
      <Image source={pet.imageUrl} style={styles.image} resizeMode="cover" />
      
      
      <Text style={styles.petName}>{pet.name}</Text>

      
      <Text style={styles.petDescription} numberOfLines={2}>
        {pet.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: "60%",
    borderRadius: 10,
  },
  petName: {
    fontFamily: "outfit-medium",
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginTop: 5,
  },
  petDescription: {
    fontFamily: "outfit-regular",
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});
