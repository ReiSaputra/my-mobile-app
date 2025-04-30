import { Text, View } from "react-native";
import { style } from "./Point.style";

type PointProps = {
  fontTitle: string;
  fontTitleRank: string;
};

const Point = ({ fontTitle, fontTitleRank }: PointProps) => {
  return (
    <View style={style.level}>
      <Text style={{ fontFamily: fontTitle, color: "white" }}>Your Points</Text>
      <View style={{}}>
        <Text style={{ fontFamily: fontTitleRank, fontSize: 20, paddingVertical: 10, color: "white" }}>3217</Text>
      </View>
    </View>
  );
};

export default Point;
