import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

type PocketHistoryProps = {
  font: string;
};

const PocketHistory = ({ font }: PocketHistoryProps) => {
  const data = [
    { name: "Item 1", amount: 10000 },
    { name: "Item 1", amount: 10000 },
    { name: "Item 1", amount: 10000 },
    { name: "Item 1", amount: 10000 },
    { name: "Item 1", amount: 10000 },
    { name: "Item 1", amount: 10000 },
    { name: "Item 1", amount: 10000 },
  ];
  return (
    <View style={{ marginTop: 20, marginHorizontal: 20 }}>
      <Text style={[{ marginBottom: 5, fontSize: 18 }, { fontFamily: font }]}>Pocket History</Text>
      <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "blue", borderBottomWidth: 10 }}>
        {data.map((item, index) => (
          <View key={index} style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={[{ fontFamily: font }]}>{item.name}</Text>
            <Text style={[{ fontFamily: font }]}>{item.amount}</Text>
          </View>
        ))}
        <Link href="/(dashboard)/notification">
          <Text style={[{ fontFamily: font }]}>- See All History</Text>
        </Link>
      </View>
    </View>
  );
};

export default PocketHistory;
