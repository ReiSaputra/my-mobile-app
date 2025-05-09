 
import { Tabs } from 'expo-router';

const RootLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="pocket" options={{ title: "Pocket" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="rank" options={{ title: "Rank" }} />
    </Tabs>
    
  );
};

export default RootLayout;
