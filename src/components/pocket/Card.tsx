import { Text, View } from "react-native";
import { Link } from "expo-router";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type CardProps = {
  id?: number | string;
  name: string;
  balance: number;
  fill: number;
};
const Card = ({ name, balance, fill }: CardProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 25 }}>
      <View style={{ borderWidth: 1, width: "100%", borderRadius: 5, paddingVertical: 15, paddingHorizontal: 15, flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
        <View>
          <Text style={{}} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <Text style={{ marginTop: 30 }}>Total Balance</Text>
          <Text style={{}}>{balance}</Text>
        </View>

        <AnimatedCircularProgress size={40} width={4} fill={fill} tintColor="#00e0ff" onAnimationComplete={() => console.log("onAnimationComplete")} backgroundColor="#3d5875">
          {(fill) => <Text style={{ fontSize: 1 }}>{`${Math.round(fill)}%`}</Text>}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
};

export default Card;
