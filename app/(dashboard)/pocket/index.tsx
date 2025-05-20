import Card from "@/src/components/pocket/Card";
import ViewPocket from "@/src/components/pocket/ViewPocket";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pressable, Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import EmptyState from "@/src/components/pocket/EmptyState";
import { style } from "@/src/components/auth/ButtonAuth.style";
import { baseUrl } from "../../utils/baseUrl";
import AntDesign from "@expo/vector-icons/AntDesign";

type PocketProps = {
  id: number;
  name: string;
  balance: number;
};

const Pocket = () => {
  const [pockets, setPockets] = useState<PocketProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPockets = async () => {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("userId");

      try {
        const response = await axios.get(`${baseUrl}/users/${userId}/pockets`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          validateStatus: (status) => status < 500,
        });
        setPockets(response.data.data);
      } catch (error) {
        console.error("Error fetching pockets:", error);
      }
    };

    fetchPockets();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Pressable
        onPress={() => {
          console.info(pockets);
        }}
      >
        <Text>See</Text>
      </Pressable>

      {/* Add Pocket Button */}
      <View style={styles.addPocketContainer}>
        <TouchableOpacity style={styles.addPocketButton} onPress={() => router.push("/pocket/create")}>
          <Ionicons name="add-circle-outline" size={20} color="#fff" />
          <Text style={styles.addPocketText}>Add Pocket</Text>
        </TouchableOpacity>
      </View>

      {pockets.map((pocket) => (
        <View
          key={pocket.id}
          style={[
            styles.containerColumn,
            {
              backgroundColor: "#870C79",
              borderRadius: 20,
              marginBottom: 20, // biar tidak dempet antar kartu
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingHorizontal: "5%", paddingVertical: "10%" }}>
              <Text style={styles.titleText}>{pocket.name}</Text>
              <Text style={styles.moneyText}>Rp {pocket.balance?.toLocaleString("id-ID")}</Text>
            </View>
            <View style={{ paddingTop: "5%" }}>
              <Image
                source={require("../../../assets/images/money.png")}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            </View>
          </View>

          {/* Button withdraw and deposit */}
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.buttonPosition}
                onPress={() => {
                  router.push({
                    pathname: "/pocket/deposit",
                    params: { pocketId: pocket.id }, // kalau ingin kirim data
                  });
                }}
              >
                <AntDesign name="caretdown" size={24} color="#00A9A9" />
                <Text style={{ color: "#00A9A9" }}>Deposit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.buttonPosition}
                onPress={() => {
                  router.push({
                    pathname: "/pocket/withdraw",
                    params: { pocketId: pocket.id }, // kalau ingin kirim data
                  });
                }}
              >
                <AntDesign name="caretup" size={24} color="#980E20" />
                <Text style={{ color: "#980E20" }}>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}

      {/* Achieved Saving List */}
      {/* <View style={styles.containerColumn}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: "5%",
          }}
        >
          <Text
            style={{
              color: "#4E4C4C",
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            Achieved Savings Goal
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#B01F9F" }}>See All</Text>
          </TouchableOpacity>
        </View> */}

      {/* Example Achieved Item */}
      {/* <View style={{ flexDirection: "row", gap: 10, marginBottom: "5%" }}>
          <Image source={require("../../../assets/images/icon-mark.png")} style={{ width: 20, height: 20 }} />
          <Text style={{ flex: 1 }}>Dream Vacation</Text>
          <Text style={{ marginRight: "2%", color: "#B01F9F" }}>Rp 1.000.000</Text>
        </View>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerColumn: {
    marginHorizontal: "5%",
    marginTop: "10%",
    paddingHorizontal: "5%",
    paddingBottom: "5%",
  },
  titleText: {
    fontWeight: "600",
    fontSize: 15,
    color: "white",
    marginBottom: "15%",
  },
  moneyText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
  },
  containerButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: "50%",
    marginEnd: "2%",
    marginTop: "10%",
  },
  buttonPosition: {
    marginVertical: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "5%",
    paddingHorizontal: "2%",
    gap: 10,
  },
  addPocketContainer: {
    marginTop: 20,
    marginHorizontal: "5%",
    alignItems: "flex-end",
  },
  addPocketButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B01F9F",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  addPocketText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "600",
  },
});

export default Pocket;
