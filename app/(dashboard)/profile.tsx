import iconSet from "@expo/vector-icons/build/Fontisto";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useFonts } from "expo-font";

const Profile = () => {
  const [loaded, error] = useFonts({
    "Outfit-Regular": require("../../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../assets/fonts/Outfit-Medium.ttf"),
  });

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={{ width: 100, height: 100, marginTop: "40%" }}
        ></Image>
      </View>
      <Text style={[styles.mainText,{textAlign:'center'}]}>LoremIpsum</Text>
      <Text style={styles.subText}>LoremIpsum@gmail.com</Text>
      {/* setting section */}

      <Text
        style={[styles.subText, styles.containerRow, { textAlign: "left" }]}
      >
        Settings
      </Text>
      <View style={[styles.borderStyle, styles.containerRow, {marginTop: '2%', paddingVertical: '2%'}]}>
        <View style={{ marginBottom: '2%' }}>
          <Text style={[styles.mainText, {fontSize:17}]}>Profile</Text>
          <Text>Change your profile</Text>
        </View> 
        <View style={{ marginBottom: '2%' }}>
          <Text style={[styles.mainText, {fontSize:17}]}>Profile</Text>
          <Text>Change your profile</Text>
        </View> 
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  containerRow: {
    marginHorizontal: "5%",
    marginTop: "10%",
    marginVertical: "auto",
  },
  borderStyle: {
    borderRadius: 30,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    paddingHorizontal: "5%",
    paddingVertical: "10%",
  },
  mainText: {
    marginTop: "4%",
    fontWeight: "600",
    fontSize: 20,
    color: "#00A9A9", 
    fontFamily: "Outfit-Medium",
  },
  subText: {
    fontWeight: "400",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Outfit-regular",
    color: "#4E4C4C",
  },
});
export default Profile;
