import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false, title: "Authentication" }}></Stack.Screen>
      <Stack.Screen name="(dashboard)" options={{ headerShown: false, title: "Dashboard" }}></Stack.Screen>
    </Stack>
  );
}

export default RootLayout;