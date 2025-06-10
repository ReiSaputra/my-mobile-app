import Bio from "@/src/components/dashboard/Bio";
import { Text, View } from "react-native";
import ViewDashboard from "@/src/components/dashboard/ViewDashboard";
import Level from "@/src/components/dashboard/Level";
import { useFonts } from "expo-font";
import Point from "@/src/components/dashboard/Point";
import PocketHistory from "@/src/components/dashboard/PocketHistory";
import { FontAwesome6 } from "@expo/vector-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseUrl } from "../utils/baseUrl";

const Index = () => {
  const [loaded, error] = useFonts({
    "Outfit-Regular": require("../../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../assets/fonts/Outfit-Medium.ttf"),
  });

  const [user, setUser] = useState({
    name: "Guest",
    amount: 0,
    pocket: [],
    pocketHistories: [],
  });
  
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const router = useRouter();
  

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

  return (
    <ViewDashboard>
      <View style={{ paddingHorizontal: 20, backgroundColor: "#7C4585", paddingVertical: 15, flex: 1, justifyContent: "flex-end", flexDirection: "row" }}>
        <FontAwesome6 name="bell" size={27} iconStyle="solid" color="white"></FontAwesome6>
      </View>
      <Bio name={user.name} amount={user.amount}></Bio>
      <View style={{ flex: 1, flexDirection: "row", marginTop: 40, gap: 10, paddingHorizontal: 20 }}>
        <Level fontTitle="Outfit-Medium" fontTitleRank="Outfit-Bold"></Level>
        <Point fontTitle="Outfit-Medium" fontTitleRank="Outfit-Bold"></Point>
      </View>
      <PocketHistory font="Outfit-Regular" pocketHistories={user.pocketHistories}></PocketHistory>
    </ViewDashboard>
  );
};

export default Index;
