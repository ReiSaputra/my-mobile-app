import { useFonts } from "expo-font";

const fontsCustom = () => {
  const [loaded, error] = useFonts({
    "Outfit-Regular": require("@/assets/fonts/Outfit-Regular.ttf"),
  });
};

export { fontsCustom };
