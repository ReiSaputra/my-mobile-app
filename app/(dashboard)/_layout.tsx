import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="pocket" options={{ title: "Pocket", headerShown: false }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false }} />
      <Tabs.Screen name="rank" options={{ title: "Rank", headerShown: false }} />
      <Tabs.Screen name="notification" options={{ title: "Notification", headerShown: false }}></Tabs.Screen>
    </Tabs>
  );
};

export default RootLayout;
