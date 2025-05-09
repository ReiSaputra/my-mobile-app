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

const Rank = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.containerRow}>
        <TouchableOpacity style={[styles.activeMenu, styles.tabPosition]}>
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "600" }}
          >
            my points
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabPosition}>
          <Text style={{ textAlign: "center" }}>Leaderboard</Text>
        </TouchableOpacity>
      </View>

      {/*  */}
      <View
        style={{
          flex: 1,
          marginTop: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/icon-level.png")}
          style={{ width: 100, height: 100 }}
        ></Image>
        <Text style={{ marginTop: "5%" }}>Your A </Text>
        <Text style={styles.levelText}> Warrior</Text>
      </View>
      {/* rank state */}
      <View
        style={[
          styles.containerRow,
          { padding: "5%", borderColor: "#D9D9D9", borderWidth: 0.5 },
        ]}
      >
        <View>
          <Image
            source={require("../../assets/images/icon-streak.png")}
            style={styles.iconSize}
          ></Image>
          <Text style={styles.valueText}>15</Text>
          <Text>Days</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/images/icon-points.png")}
            style={styles.iconSize}
          ></Image>
          <Text style={styles.valueText}>900</Text>
          <Text>Points</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/images/icon-goals.png")}
            style={styles.iconSize}
          ></Image>
          <Text style={styles.valueText}>70%</Text>
          <Text>Goal</Text>
        </View>
      </View>
      {/* point journey */}
      <Text style={[styles.containerBorder, {fontWeight: '600', }]}>Point Journey</Text>
      <View style={[styles.containerPointsJourney, styles.sizing, {marginTop: '2%'}]}>
      {/* placeholder points journey */}
        <View style={styles.pointSet}>
          <Image
            source={require("../../assets/images/icon-xp.png")}
            style={styles.iconSize}
          ></Image>
          <Text>10xp</Text>
        </View>
        <View style={styles.pointSet}>
          <Image
            source={require("../../assets/images/icon-xp.png")}
            style={styles.iconSize}
          ></Image>
          <Text>10xp</Text>
        </View>
        <View style={styles.pointSet}>
          <Image
            source={require("../../assets/images/icon-xp.png")}
            style={styles.iconSize}
          ></Image>
          <Text>10xp</Text>
        </View>
        <View style={styles.pointSet}>
          <Image
            source={require("../../assets/images/icon-xp.png")}
            style={styles.iconSize}
          ></Image>
          <Text>10xp</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "5%",
    marginTop: "10%",
    marginVertical: "auto",
    borderRadius: 30,
    borderWidth: 4,
    borderColor: "#FFECF9",
  },
  activeMenu: {
    backgroundColor: "#8A168E",
    color: "white",
  },
  tabPosition: {
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    borderRadius: 30,
    marginVertical: "auto",
    width: "50%",
  },
  levelText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#8A168E",
  },
  iconSize: {
    width: 50,
    height: 50,
  },
  valueText: {
    fontWeight: "700",
    fontSize: 23,
    textAlign: "center",
  },
  sizing: {
    flexDirection: "row",
    padding: "5%",
    marginHorizontal: "5%",
    marginTop: "10%", 
  },
  containerBorder: {
    marginHorizontal: "5%",
    marginTop: "10%",
    marginVertical: "auto",
  },
  containerPointsJourney: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  pointSet: {
    width: "30%",
    marginBottom: "5%",
    padding: "5%",
    borderColor: "#D9D9D9",
    borderWidth: 0.5,
    borderRadius: 30, 
  },
});

export default Rank;
