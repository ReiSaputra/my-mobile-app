import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { style } from "@/src/components/auth/ButtonAuth.style";
const Deposit = () => {
  return (
    <ScrollView style={styles.container}>
        {/*   category */}
      <Text style={styles.header}>Select Category</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {/* chosen category*/}
        <Text
          style={[
            styles.categoryContent,
            { backgroundColor: "#5EB4C3", color: "white" },
          ]}
        >
          Self Reward
        </Text>
      </View>
      {/* target saving field */}
      <Text style={[styles.header, { marginVertical: "5%" }]}>
        Target Saving
      </Text>
      <View style={styles.inputField}>
        <Image
          source={require("../../../assets/images/icon-target-saving.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
        <Text style={{ color: "#5EB4C3" }}>  1.000.000</Text>
      </View>
          {/* current saving field */}
      <Text style={[styles.header, { marginVertical: "5%" }]}>
        Deposit
      </Text>
      <View style={styles.inputField}>
        <Image
          source={require("../../../assets/images/icon-current-saving.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
        <TextInput style={{ color: "#5EB4C3" }}></TextInput>
      </View>

       
      {/* Camera section */}
      <Text style={[styles.header, { marginVertical: "5%" }]}>Money Snap</Text>
      <View
        style={[
          styles.inputField,
          {
            flexDirection: "row",
            borderRadius: 30,
            backgroundColor: "#FFFCFE",
            paddingVertical: "4%",
            paddingHorizontal: "6%",
          },
        ]}
      >
        <Text style={{ width: "80%" }}>Snap your cash, log your save.</Text>
        {/* Camera Button */}
        <TouchableOpacity>
          <Image
            source={require("../../../assets/images/icon-camera.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        </TouchableOpacity>
      </View>
      {/* Create Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#5E9AA4",
          padding: 16,
          borderRadius: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>Deposit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
    paddingVertical: "10%",
    backgroundColor: "white",
  },
  categoryContent: {
    marginEnd: "2%",
    marginTop: "2%",
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    borderColor: "#5E9AA4",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#FDDDFC",
    color: "#5EB4C3",
    fontWeight: "500",
    fontSize: 12,
  },
  header: {
    color: "#5EB4C3",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: "2%",
  },
  inputField: {
    flexDirection: "row",
    gap: 10,
    marginVertical: "2%",
    alignItems: "center",
    backgroundColor: "#FFFCFE",
    paddingHorizontal: "2%",
    paddingVertical: "1%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#5E9AA4",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    color: "purple",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputGroup: {
    flex: 1,
    marginHorizontal: 5,
    borderColor: "#5E9AA4",
  },
  label: {
    marginBottom: 4,
    color: "#666",
  },
  input: {
    backgroundColor: "#FFFCFE",
    borderRadius: 10,
    borderColor: "#5E9AA4",
    padding: 10,
  },
});

export default Deposit;
