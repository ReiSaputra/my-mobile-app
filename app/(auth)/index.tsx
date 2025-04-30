import { Text } from "react-native";
import { router } from "expo-router";
import { produce } from "immer";
import { useState } from "react";
import ViewForm from "@/src/components/auth/ViewForm";
import InputAuth from "@/src/components/auth/InputAuth";
import ButtonAuth from "@/src/components/auth/ButtonAuth";
import { useFonts } from "expo-font";

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

  const handleLogin = () => {
    if (user.email === "A" || user.password === "A") {
      console.log(user);
      router.replace("/(dashboard)");
    } else {
      console.log("wrong");
    }
  };

  return (
    <ViewForm>
      <Text style={{ fontSize: 30, marginBottom: 20, fontFamily: "Outfit-Medium" }}>Welcome!</Text>
      <InputAuth placeholderInput="Your Email" keyboardTypeInput="email-address" textContentTypeInput="emailAddress" onChangeInput={handleEmailInput}></InputAuth>
      <InputAuth placeholderInput="Your Password" secureTextEntryInput={true} onChangeInput={handlePasswordInput} textContentTypeInput="password" keyboardTypeInput="default"></InputAuth>
      <ButtonAuth onSubmit={handleLogin} font="Outfit-Medium"></ButtonAuth>

    </ViewForm>
  );
};

export default Index;
