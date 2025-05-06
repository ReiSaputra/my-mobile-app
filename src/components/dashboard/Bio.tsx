import { Pressable, Text, View } from "react-native";
import { style } from "./Bio.style";
import { useFonts } from "expo-font";

type BioProps = {
  name: string;
  amount: number;
};
const Bio = ({ name = "Guest", amount = 0 }: BioProps) => {
  const [loaded, error] = useFonts({
    "Outfit-Regular": require("../../../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../../assets/fonts/Outfit-Medium.ttf"),
  });

  return (
    <View style={style.bio}>
      <View style={style.bioTitle}>
        <Text style={{ fontFamily: "Outfit-Medium", color: "white", fontSize: 20 }}>Hello, {name}</Text>
        <Text style={{ fontFamily: "Outfit-Regular", color: "white" }}>What can I do for you, today?</Text>
      </View>
      <View style={style.bioDescription}>
        <View style={style.amountSaving}>
          <Text style={{ fontFamily: "Outfit-Medium", color: "white", fontSize: 17.5 }}>{amount}</Text>
          <Text style={{ fontFamily: "Outfit-Regular", color: "white" }}>Total Savings</Text>
        </View>
      </View>
      <View style={style.buttonAddPocket}>
        <Pressable style={style.presser}>
          <Text style={{ fontFamily: "Outfit-Bold", color: "#1c700a" }}>+ Add Pocket</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Bio;
