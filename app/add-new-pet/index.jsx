import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import Colors from "../../constants/Colors";
import Category from "../../components/Home/Category";
import Toast from "react-native-toast-message"; 
import RNPickerSelect from "react-native-picker-select";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    category: "Dogs",
    breed: "",
    age: "",
    weight: "",
    sex: "Male",
    address: "",
    about: "",
  });
  const [loader, setLoader] = useState(false);

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleCategoryChange = (selectedCategory) => {
    handleInputChange("category", selectedCategory);
  };

  const onValueChange = (value) => {
    handleInputChange("sex", value); // Update the sex field in formData
  };

  const onSubmit = () => {
    if (Object.values(formData).some((value) => !value)) {
      Toast.show({
        type: "error",
        text1: "Please fill all the fields",
        position: "bottom",
      });
      return;
    }

    setLoader(true);
    // Save form logic here
    console.log("Form Data:", formData);

    setTimeout(() => {
      setLoader(false);
      Toast.show({
        type: "success",
        text1: "Pet added successfully!",
        position: "bottom",
      });
    }, 1500);
  };

  const formFields = [
    { label: "Pet Name *", field: "name", keyboardType: "default" },
    { label: "Breed *", field: "breed", keyboardType: "default" },
    { label: "Age *", field: "age", keyboardType: "numeric" },
    { label: "Weight *", field: "weight", keyboardType: "numeric" },
    { label: "Sex *", field: "sex", keyboardType: "default", value: formData.sex },
    { label: "Address *", field: "address", keyboardType: "default" },
    { label: "About *", field: "about", keyboardType: "default", multiline: true },
  ];

  const pickerSelectStyles = {
    inputIOS: {
      padding: 10,
      backgroundColor: Colors.WHITE,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Colors.GRAY,
      fontFamily: "outfit-regular",
    },
    inputAndroid: {
      padding: 10,
      backgroundColor: Colors.WHITE,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Colors.GRAY,
      fontFamily: "outfit-regular",
    },
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <FlatList
        data={formFields}
        keyExtractor={(item) => item.field}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Add New Pet for Adoption</Text>
            <Category category={handleCategoryChange} />
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{item.label}</Text>
            <TextInput
              style={[styles.input, item.multiline && styles.multilineInput]}
              onChangeText={(value) => handleInputChange(item.field, value)}
              keyboardType={item.keyboardType}
              multiline={item.multiline || false}
              value={item.value || undefined}
            />
          </View>
        )}
        ListFooterComponent={
          <>
            {/* Sex Dropdown */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Sex *</Text>
              <RNPickerSelect
                onValueChange={onValueChange}
                items={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                ]}
                style={pickerSelectStyles}
                value={formData.sex} // This binds the value to formData.sex
              />
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={onSubmit}
              disabled={loader}
            >
              {loader ? (
                <ActivityIndicator size="small" color={Colors.WHITE} />
              ) : (
                <Text style={styles.buttonText}>Add Pet</Text>
              )}
            </TouchableOpacity>
          </>
        }
      />
      <Toast />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 30,
  },
  title: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 5,
  },
  label: {
    fontFamily: "outfit-regular",
    marginBottom: 5,
  },
  input: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    fontFamily: "outfit-regular",
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: "top",
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: "outfit-medium",
  },
});
