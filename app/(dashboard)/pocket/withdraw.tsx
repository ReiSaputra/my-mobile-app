import {
    Pressable,
    Text,
    View,
    StyleSheet,
    Image, 
    TouchableOpacity,
    TextInput,
    ScrollView, 
  } from "react-native"; 
const withdraw = () => {
    return (
        <ScrollView style={styles.container}>
            {/*   category */}
          <Text style={styles.header}>Select Category</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {/* chosen category*/}
            <Text
              style={[
                styles.categoryContent,
                { backgroundColor: "#980E20", color: "white" },
              ]}
            >
              Self Reward
            </Text>
          </View>
          {/* Current Balance field */}
          <Text style={[styles.header, { marginVertical: "5%" }]}>
          Current Balance
          </Text>
          <View style={styles.inputField}>
            <Image
              source={require("../../../assets/images/icon-target-saving.png")}
              style={{ width: 30, height: 30 }}
            ></Image>
            <Text style={{ color: "#980E20" }}>Rp 1.000.000</Text>
          </View>
              {/* current saving field */}
          <Text style={[styles.header, { marginVertical: "5%" }]}>
            Withdraw
          </Text>
          <View style={styles.inputField}>
            <Image
              source={require("../../../assets/images/icon-withdraw.png")}
              style={{ width: 30, height: 30 }}
            ></Image>
            <TextInput style={{ color: "#980E20" }}></TextInput>
          </View>
    
           
          
          <TouchableOpacity
            style={{
              backgroundColor: "#980E20",
              padding: 16,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>Withdraw</Text>
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
        borderColor: "#980E20",
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: "#FDDDFC",
        color: "#980E20",
        fontWeight: "500",
        fontSize: 12,
      },
      header: {
        color: "#980E20",
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
        borderColor: "#980E20",
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
        borderColor: "#980E20",
      },
      label: {
        marginBottom: 4,
        color: "#666",
      },
      input: {
        backgroundColor: "#FFFCFE",
        borderRadius: 10,
        borderColor: "#980E20",
        padding: 10,
      },
    });
    

export default withdraw;