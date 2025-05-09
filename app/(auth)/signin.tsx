import { Text } from "react-native";
import { Link, router } from "expo-router";
import { produce } from "immer";
import { useState } from "react";
import ViewForm from "@/src/components/auth/ViewForm";
import InputAuth from "@/src/components/auth/InputAuth";
import ButtonAuth from "@/src/components/auth/ButtonAuth";
import { useFonts } from "expo-font";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseUrl } from "../utils/baseUrl";

const Index = () => {
  const [loaded, error] = useFonts({
    "Outfit-Regular": require("../../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../assets/fonts/Outfit-Medium.ttf"),
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorClient, setErrorClient] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailInput = (value: string) => {
    setUser(
      produce((draft) => {
        draft.email = value;
      })
    );
  };

  const handlePasswordInput = (value: string) => {
    setUser(
      produce((draft) => {
        draft.password = value;
      })
    );
  };

  const handleLogin = async () => {
    const httpClient = axios.create({
      baseURL: baseUrl,
      // baseURL: "http://10.0.173.225:3000/api",
      validateStatus: (status) => {
        return status < 500;
      },
    });

    try {
      console.log(user);
      await httpClient.post("/auth/login", user).then((res) => {
        if (res.status === 200) {
          console.info(res.data);
          AsyncStorage.setItem("userId", res.data.data.id);
          AsyncStorage.setItem("token", res.data.data.token);
          router.replace("/(dashboard)");
        } else {
          setErrorClient(true);
          setErrorMessage(res.data.message);
          console.log("Error Client:", res.status, res.data);
        }
      });
    } catch (error) {
      console.log("Error Server:", error);
    }
  };

  return (
    <ViewForm>
      <Text style={{ fontSize: 30, marginBottom: 20, fontFamily: "Outfit-Medium" }}>Sign In</Text>
      <InputAuth placeholderInput="Your Email" keyboardTypeInput="email-address" textContentTypeInput="emailAddress" onChangeInput={handleEmailInput}></InputAuth>
      <InputAuth placeholderInput="Your Password" secureTextEntryInput={true} onChangeInput={handlePasswordInput} textContentTypeInput="password" keyboardTypeInput="default"></InputAuth>
      <ButtonAuth onSubmit={handleLogin} font="Outfit-Medium" titleButton="Sign In"></ButtonAuth>
      {errorClient && <Text style={{ color: "red" }}>{errorMessage}</Text>}
      <Text style={{ fontFamily: "Outfit-Medium" }}>
        Don't have an account?
        <Link href="/signup" style={{ color: "#7C4585" }}>
          {" "}
          Sign Up
        </Link>
      </Text>
    </ViewForm>
  );
};

export default Index;
