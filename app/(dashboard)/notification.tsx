import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { baseUrl } from "../utils/baseUrl";

const Notification = () => {
  const [template, setTemplate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("userId");

      if (!token) {
        router.replace("/(auth)/signin");
      } else {
        try {
          const res = await axios.get(`${baseUrl}/notifications/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            validateStatus: (status) => status < 500,
          });

          if (res.status !== 200) {
            console.info(res.data);
            alert("Gagal mengambil notifikasi");
          } else {
            setTemplate(res.data.data);
          }
        } catch (err) {
          console.info(err);
          alert("Terjadi kesalahan");
        } finally {
          setLoading(false);
        }
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} />;
  }

  if (template.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Tidak ada notifikasi.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {template.map((item) => (
        <TouchableOpacity key={item.id} style={styles.itemContainer} onPress={() => router.push(`/notification-detail/${item.id}`)}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#777",
  },
});

export default Notification;
