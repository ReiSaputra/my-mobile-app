 
import { Tabs } from 'expo-router';

const RootLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="pocket" options={{ title: "Pocket", headerShown: false }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false }} />
      <Tabs.Screen name="rank" options={{ title: "Rank", headerShown: false }} />
    </Tabs>
  );
};

export default RootLayout;
