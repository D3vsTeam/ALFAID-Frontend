import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, SafeAreaView } from "react-native";
import { PickImage } from '../../components'
import { Camera, CameraType } from "expo-camera";
import { useEffect, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons';

export const PageCamera = () => {
  const camRef = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(true);
  const [capturedPhoto, setCapturePhoto] = useState(null);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text> Acesso negado!</Text>;
  }

  async function takePickute() {
    if (camRef) {
      const data = await camRef.current.takePicturesAsync();
      setCapturePhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Camera style={{ flex: 1 }}
        type={type}
        ref={camRef}
      >
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);

            }}>
            <Text style={{ fontSize: 20, marginBottom: 13, color: "#fff" }}> Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity>
        <FontAwesome name="camera" size={23} color='#fff' />
      </TouchableOpacity>
      {
        capturedPhoto &&
        <Modal
          animationType='slide'
          transparent={false}
          visible={open}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: ' center', margin: 20 }}>

            <View style={{ margin: 10, flexDirection: 'row' }}>
              <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
                <FontAwesome name="window-close" size={50} color="#FF0000" />
              </TouchableOpacity>

              <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
                <FontAwesome name="upload" size={50} color="#121212" />
              </TouchableOpacity>
            </View>
            <Image
              style={{ width: '100%', height: 450, borderRadius: 20 }}
              source={{ uri: capturedPhoto }}
            />

          </View>
        </Modal>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 600,

  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});