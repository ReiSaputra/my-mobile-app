import Card from "@/src/components/pocket/Card";
import ViewPocket from "@/src/components/pocket/ViewPocket";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "react-native";

type PocketProps = {
  id: number;
  name: string;
  balance: number;
};
const Pocket = () => {
  const [pockets, setPockets] = useState<PocketProps[]>([]);

  useEffect(() => {
    const fetchPockets = async () => {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("userId");

      try {
        const response = await axios.get(`http://192.168.1.9:3000/api/users/${userId}/pockets`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          validateStatus: (status) => status < 500,
        });
        setPockets(response.data.data);
        console.info(response.data);
      } catch (error) {
        console.error("Error fetching pockets:", error);
      }
    };

    fetchPockets();
  }, []);

  return (
    <ViewPocket>
      <></>
      {pockets.length === 0 ? <Text>None</Text> : pockets.map((pocket) => <Card key={pocket.id} name={pocket.name} balance={pocket.balance} fill={30} />)}
      {/* {pockets.map((pocket) => (
        <Card key={pocket.id}>{pocket.name}</Card>
      ))} */}
    </ViewPocket>
  );
};

export default Pocket;
