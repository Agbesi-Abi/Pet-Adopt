import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";

export default function Category({ category }) {
  const [selectedCategory, setSelectedCategory] = useState("Dogs");

  const predefinedOrder = ["Dogs", "Cats", "Birds", "Fishes"];

  // Static categories
  const categories = [
    { name: "Dogs", imageUrl: require("../../assets/images/dog.png") },
    { name: "Cats", imageUrl: require("../../assets/images/cat.png") },
    { name: "Birds", imageUrl: require("../../assets/images/bird.png") },
    { name: "Fishes", imageUrl: require("../../assets/images/fish.png") },
  ];

  // Filter and sort categories
  const sortedCategories = categories
    .filter((cat) => predefinedOrder.includes(cat.name))
    .sort((a, b) => predefinedOrder.indexOf(a.name) - predefinedOrder.indexOf(b.name));

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 20, marginBottom: 10 }}>
        Category
      </Text>
      <FlatList
        data={sortedCategories}
        numColumns={4}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedCategory(item.name);
              category(item.name);
            }}
            style={{ flex: 1 }}
          >
            <View
              style={[
                styles.container,
                selectedCategory === item.name && styles.selectedCategoryContainer,
              ]}
            >
              <Image
                source={item.imageUrl}
                style={styles.image}
                resizeMode="contain" 
              />
            </View>
            <Text style={{ textAlign: "center", fontSize: 14 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    margin: 5,
    height: 70, 
  },
  image: {
    width: 60, 
    height: 55, 
    borderRadius: 10, 
  },
  selectedCategoryContainer: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.SECONDARY,
  },
});
