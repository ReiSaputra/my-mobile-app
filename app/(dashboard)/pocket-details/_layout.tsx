import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[pocketId]" options={{ headerShown: false, title: "Pocket Detail" }} />
    </Stack>
  );
};

export default RootLayout;
