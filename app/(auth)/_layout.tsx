import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false, title: "Login" }} />
      <Stack.Screen name="signup" options={{ headerShown: false, title: "Register" }} />
    </Stack>
  );
};

export default RootLayout;
