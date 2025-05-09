import ButtonAuth from "@/src/components/auth/ButtonAuth";
import InputAuth from "@/src/components/auth/InputAuth";
import ViewForm from "@/src/components/auth/ViewForm";
import { useFonts } from "expo-font";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { produce } from "immer";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

const SignUp = () => {
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

  const handleRegister = async () => {
    const httpClient = axios.create({
      baseURL: baseUrl,
      validateStatus: (status) => {
        return status < 500;
      },
    });

    try {
      await httpClient.post("/auth/register", user).then((res) => {
        if (res.status === 200) {
          setErrorClient(false);
          setErrorMessage("");
          router.replace("/(auth)/signin");
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

  const handleEmailInput = (email: string) => {
    setUser(
      produce((draft) => {
        draft.email = email;
      })
    );
  };

  const handlePasswordInput = (password: string) => {
    setUser(
      produce((draft) => {
        draft.password = password;
      })
    );
  };

  return (
    <ViewForm>
      <Text style={{ fontSize: 30, marginBottom: 20, fontFamily: "Outfit-Medium" }}>Sign Up</Text>
      <InputAuth placeholderInput="Your Email" keyboardTypeInput="email-address" textContentTypeInput="emailAddress" onChangeInput={handleEmailInput}></InputAuth>
      <InputAuth placeholderInput="Your Password" secureTextEntryInput={true} onChangeInput={handlePasswordInput} textContentTypeInput="password" keyboardTypeInput="default"></InputAuth>
      <ButtonAuth onSubmit={handleRegister} font="Outfit-Medium" titleButton="Sign Up"></ButtonAuth>
      {errorClient && <Text style={{ color: "red" }}>{errorMessage}</Text>}
      <Text style={{ fontFamily: "Outfit-Medium" }}>
        Already have an account?{" "}
        <Link href="/(auth)/signin" style={{ color: "#7C4585" }}>
          Sign In
        </Link>
      </Text>
    </ViewForm>
  );
};

export default SignUp;
