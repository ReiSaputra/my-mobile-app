// app/createPocket/_layout.tsx
import { Stack } from 'expo-router';

const CreatePocketLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Pocket"}} />
      <Stack.Screen name="pocket" options={{ title: "Create Pocket"}} />
      <Stack.Screen name="deposit" options={{ title: "Deposit" }} />
      <Stack.Screen name="withdraw" options={{ title: "Withdraw",
        headerShown: false,
       }} />

      {/* Add other screens in this stack if needed */}
    </Stack>
  );
};

export default CreatePocketLayout;