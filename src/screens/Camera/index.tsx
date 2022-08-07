import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, Button } from "react-native";
import { Camera, CameraCapturedPicture } from "expo-camera";
import { useEffect, useRef } from "react";
import { shareAsync } from "expo-sharing"
import { FontAwesome } from "@expo/vector-icons"
import *as MediaLibrary from 'expo-media-library'
import { background } from "native-base/lib/typescript/theme/styled-system";


export const PageCamera = () => {
  const cameraRef = useRef<Camera>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMediaLibraryPermission, sethasMediaLibraryPermission] = useState(false);
  const [photo, setphoto] = useState<CameraCapturedPicture>();


  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      
      setHasCameraPermission(cameraPermission.status === "granted");
      sethasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requerindo permissões ...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Sem permissão!</Text>
  }

  const takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,

    };
    if (cameraRef.current) {
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      setphoto(newPhoto);
    }

  }

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setphoto(undefined);
      })
    };
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setphoto(undefined);
      })
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg:base64" + photo.base64 }} />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setphoto(undefined)} />
      </SafeAreaView>
    );

  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="take pic" onPress={takePic} />
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: 'center',
    alignItems: 'flex-end',
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1,
  }

});