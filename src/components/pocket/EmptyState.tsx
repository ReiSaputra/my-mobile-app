import Card from "@/src/components/pocket/Card";
import ViewPocket from "@/src/components/pocket/ViewPocket";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
   
} from "react-native"; 
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter, Link } from 'expo-router';

type PocketProps = {
  id: number;
  name: string;
  balance: number;
};
const EmptyState = () => {
  const [pockets, setPockets] = useState<PocketProps[]>([]); 

  // router
  const router = useRouter();

  return (
    // <ViewPocket>
    //   <></>
    //   {pockets.length === 0 ? <Text>None</Text> : pockets.map((pocket) => <Card key={pocket.id} name={pocket.name} balance={pocket.balance} fill={30} />)}
    //   {/* {pockets.map((pocket) => (
    //     <Card key={pocket.id}>{pocket.name}</Card>
    //   ))} */}
    // </ViewPocket>
    <View style={style.container}>
      
    <Image source={require("../../assets/images/add-saving.png")} style={{ width: 50, height: 50 }}></Image>
    <Text style={style.subHeading}>Oops,</Text>
    <Text style={style.textBody}>
      you currently don’t have any saving. Choose create to add the new one.
    </Text>  
    <TouchableOpacity style={style.buttonCreate}  >
      <Ionicons name="add-circle-outline" size={20} style={{ color: 'white', marginEnd: 5}} />
      <Text style={{ color: 'white', fontWeight: 'semibold', fontSize: 15 }}>Create</Text>
    </TouchableOpacity> 
  </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subHeading: {
    marginVertical: 5,
    color: "#616161",
    fontSize: 25,
  },
  textBody: {
    color: "#616161",
    fontSize: 15,
    textAlign: "center",
  },
  buttonCreate: {
    marginVertical: 5,
    backgroundColor: '#7D2471',
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  }
});

export default EmptyState;
