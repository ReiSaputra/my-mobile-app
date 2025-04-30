import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  bio: {
    backgroundColor: "#7C4585",
    paddingTop: 5,
    paddingBottom: 25,
    paddingHorizontal: 20,
    position: "relative",
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    borderBottomColor: "#502457",
    borderLeftColor: "#7C4585",
    borderRightColor: "#7C4585",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 5,
  },
  bioTitle: {
    marginBottom: 7.5,
    color: "white",
  },
  bioDescription: {
    marginTop: 25,
    flexDirection: "row",
  },
  amountSaving: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonAddPocket: {
    width: 150,
    flex: 1,
    position: "absolute",
    bottom: -22.5,
    right: 20,
  },
  presser: {
    borderRadius: 5,
    paddingVertical: 12.5,
    backgroundColor: "#4ce62c",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderBottomWidth: 4,
    borderLeftColor: "#4ce62c",
    borderTopColor: "#4ce62c",
    borderRightColor: "#4ce62c",
    borderBottomColor: "#1c700a",
  },
});

export { style };
