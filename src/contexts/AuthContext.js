import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import { useRouter } from "expo-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("userId");

      if (!token) {
        router.replace("/(auth)/signin");
        return;
      }

      try {
        const res = await axios.get(`${baseUrl}/users/${userId}/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status !== 200) {
          router.replace("/(auth)/signin");
        } else {
          setUser(res.data.data);
          setIsAuthChecked(true);
        }
      } catch {
        router.replace("/(auth)/signin");
      }
    };

    checkAuth();
  }, []);

  return <AuthContext.Provider value={{ user, setUser, isAuthChecked }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
