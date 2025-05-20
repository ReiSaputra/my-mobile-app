import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraActive, setIsCameraActive] = useState(false);

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

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function toggleCamera() {
    setIsCameraActive((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      {isCameraActive ? (
        <CameraView style={styles.camera} facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleCamera}>
              <Text style={styles.text}>Close Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={styles.centeredContainer}>
          <Text style={styles.message}>Camera is not active</Text>
          <Button title="Open Camera" onPress={toggleCamera} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  message: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 12,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
