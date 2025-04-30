import { Tabs } from "expo-router";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <>
      <StatusBar backgroundColor={"#7C4585"} barStyle={"light-content"}></StatusBar>
      <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false, title: "Home" }} />
        <Tabs.Screen name="pocket" options={{ headerShown: false, title: "Pocket" }} />
        <Tabs.Screen name="notification" options={{ headerShown: false, title: "Notification" }} />
        <Tabs.Screen name="profile" options={{ headerShown: false, title: "Profile" }} />
      </Tabs>
    </>
  );
};

export default RootLayout;
