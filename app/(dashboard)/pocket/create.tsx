import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";

const categories = ["Emergency", "Travel", "Education", "Celebrations", "Investment", "Self Reward", "Gift", "Shopping Purchase"];

const CreatePocket = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [targetSaving, setTargetSaving] = useState("");
  const [currentSaving, setCurrentSaving] = useState("");
  const [startDuration, setStartDuration] = useState("");
  const [endDuration, setEndDuration] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Select Category */}
      <Text style={styles.header}>Select Category</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryContent,
                isSelected && {
                  backgroundColor: "#870C79",
                  borderColor: "#870C79",
                },
              ]}
              onPress={() => setSelectedCategory(cat)}
              activeOpacity={0.7}
            >
              <Text style={[styles.categoryText, isSelected && { color: "white" }]}>{cat}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Target Saving */}
      <Text style={[styles.header, { marginVertical: 16 }]}>Target Saving</Text>
      <View style={styles.inputField}>
        <Image source={require("../../../assets/images/icon-target-saving.png")} style={{ width: 30, height: 30 }} />
        <TextInput style={styles.inputText} placeholder="Enter target saving" placeholderTextColor="#870C7999" keyboardType="numeric" value={targetSaving} onChangeText={setTargetSaving} />
      </View>

      {/* Current Saving */}
      <Text style={[styles.header, { marginVertical: 16 }]}>Current Saving</Text>
      <View style={styles.inputField}>
        <Image source={require("../../../assets/images/icon-current-saving.png")} style={{ width: 30, height: 30 }} />
        <TextInput style={styles.inputText} placeholder="Enter current saving" placeholderTextColor="#870C7999" keyboardType="numeric" value={currentSaving} onChangeText={setCurrentSaving} />
      </View>

      {/* Duration */}
      <Text style={[styles.header, { marginVertical: 16 }]}>Duration</Text>
      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Start</Text>
          <TextInput style={[styles.inputField, { paddingHorizontal: 8, paddingVertical: 10 }]} placeholder="YYYY-MM-DD" placeholderTextColor="#999" value={startDuration} onChangeText={setStartDuration} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>End</Text>
          <TextInput style={[styles.inputField, { paddingHorizontal: 8, paddingVertical: 10 }]} placeholder="YYYY-MM-DD" placeholderTextColor="#999" value={endDuration} onChangeText={setEndDuration} />
        </View>
      </View>

      {/* Create Button */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => {
          // Bisa tambahkan logic simpan data di sini
          alert(`Create pocket:\nCategory: ${selectedCategory}\nTarget: ${targetSaving}\nCurrent: ${currentSaving}\nDuration: ${startDuration} to ${endDuration}`);
        }}
        activeOpacity={0.8}
      >
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
    backgroundColor: "white",
  },
  categoryContent: {
    marginEnd: 8,
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "#FDDDFC",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#FDDDFC",
  },
  categoryText: {
    color: "#870C79",
    fontWeight: "500",
    fontSize: 12,
  },
  header: {
    color: "#870C79",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 4,
  },
  inputField: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 8,
    alignItems: "center",
    backgroundColor: "#FFFCFE",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFECF9",
  },
  inputText: {
    flex: 1,
    color: "#870C79",
    fontSize: 14,
    paddingVertical: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputGroup: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    marginBottom: 4,
    color: "#666",
  },
  createButton: {
    backgroundColor: "#9C1399",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 24,
  },
  createButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default CreatePocket;
