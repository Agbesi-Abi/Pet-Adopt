import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import PetCard from "../../components/Home/PetCard";

// Simulated local data for pets and user favorites
const localPets = [
  { id: "1", name: "Cute Dog", breed: "Labrador", imageUrl: "../../assets/images/cats.jpg" },
  { id: "2", name: "Adorable Cat", breed: "Siamese", imageUrl: "https://example.com/cat.jpg" },
  { id: "3", name: "Playful Rabbit", breed: "Angora", imageUrl: "https://example.com/rabbit.jpg" },
  // Add more pets as needed
];

const userFavoriteIds = ["1", "3"]; // Simulate user favorite pet IDs

export default function Favorite() {
  const { user } = useUser();
  const [favPetIds, setFavPetIds] = useState([]); // Store favorite pet IDs
  const [favList, setFavList] = useState([]); // Store the actual pet data
  const [loading, setLoading] = useState(true); // Manage loading state

  useEffect(() => {
    if (user) {
      GetFavPetIds(); // Fetch favorite pet IDs when the user is available
    }
  }, [user]);

  const GetFavPetIds = async () => {
    setLoading(true); // Show loading spinner
    try {
      // Simulate fetching the favorite pet IDs for the user
      const result = userFavoriteIds; // In a real app, replace with actual fetching logic
      setFavPetIds(result); // Set the pet IDs for favorites
      GetFavPetList(result); // Fetch actual pet data using these IDs
    } catch (error) {
      console.error("Error fetching favorite pet IDs:", error);
      setFavPetIds([]); // Set empty if error occurs
      setFavList([]); // Set empty pet list
    }
    setLoading(false); // Hide loading spinner
  };

  const GetFavPetList = async (favIds) => {
    setLoading(true); // Show loading spinner for fetching pet data
    if (!favIds || favIds.length === 0) {
      console.warn("Favorites list is empty or undefined.");
      setFavList([]); 
      setLoading(false); 
      return;
    }

    try {
     
      const petData = localPets.filter((pet) => favIds.includes(pet.id));
      setFavList(petData); 
    } catch (error) {
      console.error("Error fetching favorite pets:", error);
    }

    setLoading(false); // Hide loading spinner
  };

  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 30 }}>Favorites</Text>
      <FlatList
        data={favList} 
        numColumns={2} 
        onRefresh={GetFavPetIds} 
        refreshing={loading} 
        renderItem={({ item, index }) => (
          <View style={{ margin: 10 }}>
            <PetCard pet={item} /> 
          </View>
        )}
        keyExtractor={(item, index) => item.id.toString()} 
      />
    </View>
  );
}
