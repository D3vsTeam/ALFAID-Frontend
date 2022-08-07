import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, SafeAreaView } from "react-native";
import { PickImage } from '../../components'
import { Camera, CameraType } from "expo-camera";
import { useEffect, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import *as MediaLibrary from 'expo-media-library'


export const PageCamera = () => {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(false);
  const [capturedPhoto, setCapturePhoto] = useState("");
  const [open, setOpen] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync();
      setHasPermission(status === 'granted');
      console.log(status);
    })();
  }, []);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text> Acesso negado!</Text>;
  }

  async function takePickute() {
    if (camRef.current) {
      const data = await camRef.current.takePicturesAsync();
      setCapturePhoto(data.uri);
      setOpen(true);
    }
  }

  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
      .then(() => {
        alert('Salvo com sucesso')
      })
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
              setType(type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 20, marginBottom: 13, color: "#fff" }}> Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.button} onPress={takePickute}>
        <FontAwesome name="camera" size={23} color='#FFF' />
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
    alighItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50,
  }
});