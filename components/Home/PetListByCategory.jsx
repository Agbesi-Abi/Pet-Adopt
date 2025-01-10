import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import PetListItem from "./PetListItem";

export default function PetListByCategory() {
  const [petsList, setPetsList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    GetPetList("Dogs"); // Default category on mount
  }, []);

  // Simulated local data fetch
  const GetPetList = (category) => {
    setLoader(true);
    const localPetData = {
      Dogs: [
        {
          id: "1",
          name: "Golden Retriever",
          description: "A friendly and energetic dog.",
          imageUrl: require("../../assets/images/Dogs.jpg"),
          age: "3yrs",
        },
        {
          id: "2",
          name: "Bulldog",
          description: "A calm and loving companion.",
          imageUrl: require("../../assets/images/Dogs.jpg"),
          age: "3yrs",
        },
        {
          id: "3",
          name: "Bulldog",
          description: "A calm and loving companion.",
          imageUrl: require("../../assets/images/Dogs.jpg"),
          age: "3yrs",
        },
        {
          id: "4",
          name: "Bulldog",
          description: "A calm and loving companion.",
          imageUrl: require("../../assets/images/Dogs.jpg"),
          age: "3yrs",
        },
      ],
      Cats: [
        {
          id: "5",
          name: "Persian Cat",
          description: "Elegant and charming.",
          imageUrl: require("../../assets/images/cats.jpg"),
          age: "4yrs",
        },
        {
          id: "6",
          name: "Persian Cat",
          description: "Elegant and charming.",
          imageUrl: require("../../assets/images/cats.jpg"),
          age: "4yrs",
        },
        {
          id: "7",
          name: "Persian Cat",
          description: "Elegant and charming.",
          imageUrl: require("../../assets/images/cats.jpg"),
          age: "4yrs",
        },
        {
          id: "8",
          name: "Siamese Cat",
          description: "Playful and vocal.",
          imageUrl: require("../../assets/images/cats.jpg"),
          age: "3yrs",
        },
      ],
      Birds: [
        {
          id: "9",
          name: "Parrot",
          description: "Intelligent and social.",
          imageUrl: require("../../assets/images/Birds.jpg"),
          age: "5 years",
        },
        {
          id: "10",
          name: "Parrot",
          description: "Intelligent and social.",
          imageUrl: require("../../assets/images/Birds.jpg"),
          age: "5 years",
        },
        {
          id: "11",
          name: "Parrot",
          description: "Intelligent and social.",
          imageUrl: require("../../assets/images/Birds.jpg"),
          age: "5 years",
        },
        {
          id: "12",
          name: "Canary",
          description: "Melodious and colorful.",
          imageUrl: require("../../assets/images/Birds.jpg"),
          age: "1yr",
        },
      ],
      Fishes: [
        {
          id: "13",
          name: "Goldfish",
          description: "Easy to care for and peaceful.",
          imageUrl: require("../../assets/images/Fish.jpg"),
          age: "1yr",
        },
        {
          id: "14",
          name: "Goldfish",
          description: "Easy to care for and peaceful.",
          imageUrl: require("../../assets/images/Fish.jpg"),
          age: "1yr",
        },
        {
          id: "15",
          name: "Goldfish",
          description: "Easy to care for and peaceful.",
          imageUrl: require("../../assets/images/Fish.jpg"),
          age: "1yr",
        },
        {
          id: "16",
          name: "Betta Fish",
          description: "Colorful and vibrant.",
          imageUrl: require("../../assets/images/Fish.jpg"),
          age: "1yr",
        },
      ],
      // Add more categories as needed
    };

    // Simulate filtering pets by category
    setPetsList(localPetData[category] || []);
    setLoader(false);
  };

  return (
    <View>
      {/* Render categories */}
      <Category category={(value) => GetPetList(value)} />

      {/* Render pets list */}
      <FlatList
        data={petsList}
        style={{ marginTop: 10 }}
        horizontal={true}
        refreshing={loader}
        onRefresh={() => GetPetList("Dogs")} // Default refresh action
        renderItem={({ item }) => <PetListItem pet={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
