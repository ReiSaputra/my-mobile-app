import { Pressable, Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Button } from "react-native";
import { useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useRef } from "react";
import { Camera } from "expo-camera";

const Deposit = () => {
  const [selectedCategory, setSelectedCategory] = useState("Self Reward");
  const [targetAmount, setTargetAmount] = useState("");
  const [depositAmount, setDepositAmount] = useState("");

  const categories = ["Self Reward", "Needs", "Emergency", "Education", "Health", "Others"];

  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  const cameraRef = useRef<Camera>(null);

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedPhoto(photo.uri);

      if (!mediaPermission?.granted) {
        await requestMediaPermission();
      }

      if (mediaPermission?.granted) {
        await MediaLibrary.saveToLibraryAsync(photo.uri);
      }

      setIsCameraActive(false);
    }
  };

  const toggleCameraFacing = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  if (!permission) {
    return <View style={styles.centeredContainer} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* category */}
      <Text style={styles.header}>Select Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16, }}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[
              styles.categoryContent,
              selectedCategory === category && {
                backgroundColor: "#5EB4C3",
                borderColor: "#5EB4C3",
              },
            ]}
          >
            <Text
              style={{
                color: selectedCategory === category ? "white" : "#5EB4C3",
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* target saving field */}
      <Text style={[styles.header, { marginVertical: "5%" }]}>Target Saving</Text>
      <View style={styles.inputField}>
        <Image source={require("../../../assets/images/icon-target-saving.png")} style={{ width: 30, height: 30 }} />
        <TextInput style={{ flex: 1, color: "#5EB4C3", padding: 8 }} placeholder="Enter target amount" keyboardType="numeric" value={targetAmount} onChangeText={setTargetAmount} />
      </View>

      {/* current saving field */}
      <Text style={[styles.header, { marginVertical: "5%" }]}>Deposit</Text>
      <View style={styles.inputField}>
        <Image source={require("../../../assets/images/icon-current-saving.png")} style={{ width: 30, height: 30 }} />
        <TextInput style={{ flex: 1, color: "#5EB4C3", padding: 8 }} placeholder="Enter deposit amount" keyboardType="numeric" value={depositAmount} onChangeText={setDepositAmount} />
      </View>

      {/* Camera preview */}
      <Text style={[styles.header, { marginVertical: "5%" }]}>Money Snap</Text>

      {isCameraActive ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.cameraButtonContainer}>
            <TouchableOpacity style={styles.controlButton} onPress={toggleCameraFacing}>
              <Text style={styles.controlText}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={handleTakePicture}>
              <Text style={styles.controlText}>Snap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={() => setIsCameraActive(false)}>
              <Text style={styles.controlText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <>
          <View style={styles.cameraInput}>
            <Text style={{ width: "80%" }}>Snap your cash, log your save.</Text>
            <TouchableOpacity onPress={() => setIsCameraActive(true)}>
              <Image source={require("../../../assets/images/icon-camera.png")} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
          </View>

          {/* preview image */}
          {capturedPhoto && (
            <Image
              source={{ uri: capturedPhoto }}
              style={{
                width: "100%",
                height: 200,
                borderRadius: 10,
                marginTop: 10,
                borderWidth: 1,
                borderColor: "#ccc",
              }}
              resizeMode="cover"
            />
          )}
        </>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#5E9AA4",
          padding: 16,
          borderRadius: 30,
          alignItems: "center",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>Deposit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  container: {
    paddingHorizontal: "5%",
    backgroundColor: "white",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  categoryContent: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "#5E9AA4",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#FDDDFC",
    marginBottom: 5,
  },
  header: {
    color: "#5EB4C3",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: "2%",
    marginTop: 20,
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
  cameraInput: {
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#FFFCFE",
    paddingVertical: "4%",
    paddingHorizontal: "6%",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#5E9AA4",
  },
  camera: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
  },
  cameraButtonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  controlButton: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
    borderRadius: 10,
  },
  controlText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Deposit;
