import { Link } from "expo-router";
import { Text, View } from "react-native";

type PocketHistoryItem = {
  name: string;
  amount: number;
};
type PocketHistoryProps = {
  font: string;
  pocketHistories: PocketHistoryItem[];
};

const PocketHistory = ({ font, pocketHistories }: PocketHistoryProps) => {
  return (
    <View>
      {pocketHistories.length > 0 ? (
        <View>
          <Text>Ada</Text>
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginVertical: 25, paddingVertical: 100, borderWidth: 1, marginHorizontal: 20, borderRadius: 5 }}>
          <Text>No History Added</Text>
        </View>
      )}
    </View>
    // {pocketHistories ? (<View></View>) : (<View></View>)}
    // <View style={{ marginTop: 20, marginHorizontal: 20 }}>
    //   <Text style={[{ marginBottom: 5, fontSize: 18 }, { fontFamily: font }]}>Pocket History</Text>
    //   <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "blue", borderBottomWidth: 10 }}>
    //     {pocketHistories.length === 0 ? (
    //       <Text style={[{ fontFamily: font }]}>No History Added</Text>
    //     ) : (
    //       pocketHistories.map((item, index) => (
    //         <View key={index} style={{ padding: 10, borderBottomWidth: 1 }}>
    //           <Text style={[{ fontFamily: font }]}>{item.name}</Text>
    //           <Text style={[{ fontFamily: font }]}>{item.amount}</Text>
    //         </View>
    //       ))
    //     )}

    //     <Link href="/(dashboard)/notification">
    //       <Text style={[{ fontFamily: font }]}>- See All History</Text>
    //     </Link>
    //   </View>
    // </View>
  );
};

export default PocketHistory;
