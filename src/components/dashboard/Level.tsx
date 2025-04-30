import { Text, View } from "react-native";
import { style } from "./Level.style";

type LevelProps = {
  fontTitle: string;
  fontTitleRank: string;
};

const Level = ({ fontTitle, fontTitleRank }: LevelProps) => {
  return (
    <View style={style.level}>
      <Text style={{ fontFamily: fontTitle, color: "white" }}>Your Level</Text>
      <View style={{}}>
        <Text style={{ fontFamily: fontTitleRank, fontSize: 20, paddingVertical: 10, color: "white" }}>Warrior</Text>
      </View>
    </View>
  );
};

export default Level;
