import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, title: "Login" }} />
      <Stack.Screen name="register" options={{ headerShown: false, title: "Register" }} />
    </Stack>
  );
};

export default RootLayout;
