import React from "react";
import { View, Image, FlatList, StyleSheet, Dimensions, Text } from "react-native";

export default function Slider() {
  const sliderList = [
    { id: "1", imageUrl: require("../../assets/images/slider-1.jpg") },
    { id: "2", imageUrl: require("../../assets/images/slider-2.jpg") },
    { id: "3", imageUrl: require("../../assets/images/slider-3.jpg") },
    { id: "4", imageUrl: require("../../assets/images/slider-4.jpg") },
    { id: "5", imageUrl: require("../../assets/images/slider-5.jpg") },
  ];

  return (
    <View style={styles.container}>
      {sliderList.length > 0 ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sliderList}
          renderItem={({ item }) => (
            <View style={styles.sliderItem}>
              <Image source={item.imageUrl} style={styles.sliderImage} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No sliders available
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  sliderItem: {
    marginRight: 15,

  },
  sliderImage: {
    width: Dimensions.get("screen").width * 0.9,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
});
