import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import { baseUrl } from "@/app/utils/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const CreatePocket = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [targetSaving, setTargetSaving] = useState("");
  const [currentSaving, setCurrentSaving] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [user, setUser] = useState({
    name: "Guest",
    amount: 0,
    pocket: [],
    pocketHistories: [],
  });

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("userId");

      if (!token) {
        router.replace("/(auth)/signin");
      } else {
        try {
          const res = await axios.get(`${baseUrl}/users/${userId}/dashboard`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            validateStatus: (status) => status < 500,
          });

          if (res.status !== 200) {
            router.replace("/(auth)/signin");
          } else {
            setUser({
              name: res.data.data?.name || "Guest",
              amount: res.data.data?.amount || 0,
              pocket: res.data.data?.pocket || [],
              pocketHistories: res.data.data?.pocketHistories || [],
            });
            setIsAuthChecked(true);
          }
        } catch (err) {
          router.replace("/(auth)/signin");
        }
      }
    };

    checkAuth();
  }, []);

  const categories = ["Emergency", "Travel", "Education", "Celebration", "Investment", "Self Reward", "Gift", "Shopping", "Other"];

  const onCreate = async () => {
    const userId = await AsyncStorage.getItem("userId");

    if (!selectedCategory) {
      alert("Please select a category");
      return;
    }
    if (!targetSaving) {
      alert("Please enter target saving");
      return;
    }
    if (!currentSaving) {
      alert("Please enter current saving");
      return;
    }
    if (!endDate) {
      alert("Please select an end date");
      return;
    }

    console.info({
      name: name,
      currentBalance: parseInt(currentSaving),
      userId: userId,
      type: selectedCategory.toUpperCase(),
      targetSaving: parseInt(targetSaving),
      targetDate: endDate.toISOString(),
    });
    // Semua validasi lolos, lanjut proses simpan data
    const httpClient = axios.create({
      baseURL: `${baseUrl}`,
      // baseURL: "http://10.0.173.225:3000/api",
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      },
      validateStatus: (status) => {
        return status < 500;
      },
    });

    try {
      await httpClient
        .post(`/users/${userId}/pockets`, {
          // const { name, description, balance, targetDate, category } = req.body;
          name: name,
          balance: parseInt(currentSaving),
          userId: userId,
          type: selectedCategory.toUpperCase(),
          targetSaving: parseInt(targetSaving),
          targetDate: endDate.toISOString(),
        })
        .then((res) => {
          if (res.status === 201) {
            console.info(res.data);
            alert("Pocket created successfully!");
            router.replace("/(dashboard)/pocket");
          } else {
            console.log("Error Client:", res.status, res.data);
          }
        });
    } catch (error) {
      console.log("Error Server:", error);
    }
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === "ios"); // keep open on iOS, close on Android
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Select Category</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.categoryContent,
              selectedCategory === cat && {
                backgroundColor: "#870C79",
                color: "white",
              },
            ]}
          >
            <Text
              style={{
                color: selectedCategory === cat ? "white" : "#870C79",
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={[styles.header, { marginVertical: "5%" }]}>Name</Text>
      <View style={styles.inputField}>
        <Image source={require("../../../assets/images/icon-target-saving.png")} style={{ width: 30, height: 30 }} />
        <TextInput style={{ color: "#870C79", flex: 1 }} keyboardType="default" placeholder="Enter pocket name" value={name} onChangeText={setName} />
      </View>

      <Text style={[styles.header, { marginVertical: "5%" }]}>Target Saving</Text>
      <View style={styles.inputField}>
        <Image source={require("../../../assets/images/icon-target-saving.png")} style={{ width: 30, height: 30 }} />
        <TextInput style={{ color: "#870C79", flex: 1 }} keyboardType="numeric" placeholder="Enter target saving" value={targetSaving} onChangeText={setTargetSaving} />
      </View>

      <Text style={[styles.header, { marginVertical: "5%" }]}>Current Saving</Text>
      <View style={styles.inputField}>
        <Image source={require("../../../assets/images/icon-current-saving.png")} style={{ width: 30, height: 30 }} />
        <TextInput style={{ color: "#870C79", flex: 1 }} keyboardType="numeric" placeholder="Enter current saving" value={currentSaving} onChangeText={setCurrentSaving} />
      </View>

      <Text style={[styles.header, { marginVertical: "5%" }]}>End Date</Text>
      <TouchableOpacity style={[styles.inputField, { justifyContent: "space-between" }]} onPress={() => setShowDatePicker(true)}>
        <Text style={{ color: "#870C79" }}>{endDate.toDateString()}</Text>
        {/* <Image source={require("../../../assets/images/icon-calendar.png")} style={{ width: 30, height: 30 }} /> */}
      </TouchableOpacity>

      {showDatePicker && <DateTimePicker value={endDate} mode="date" display="default" onChange={onChangeDate} minimumDate={new Date()} />}

      {/* Create Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#9C1399",
          padding: 16,
          borderRadius: 30,
          alignItems: "center",
          marginTop: 30,
        }}
        onPress={onCreate} // panggil validasi
      >
        <Text style={{ color: "white", fontWeight: "500" }}>Create</Text>
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
    marginEnd: "2%",
    marginTop: "2%",
    paddingVertical: "6%",
    paddingHorizontal: "5%",
    borderColor: "#FDDDFC",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#FDDDFC",
    color: "#870C79",
    fontWeight: "500",
    fontSize: 12,
    minWidth: 100,
    textAlign: "center",
  },
  header: {
    color: "#870C79",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: "2%",
  },
  inputField: {
    flexDirection: "row",
    gap: 10,
    marginVertical: "2%",
    alignItems: "center",
    backgroundColor: "#FFFCFE",
    paddingHorizontal: "2%",
    paddingVertical: "1%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFECF9",
  },
});

export default CreatePocket;
