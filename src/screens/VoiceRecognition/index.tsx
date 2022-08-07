import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import { Box, Button, Center, HStack, Pressable, Text, View, VStack } from 'native-base';

const VoiceRecognition: React.FC = () => {
  const [recording, setRecording] = useState<Audio.Recording>();
  const [recordings, setRecordings] = useState<any>([]);
  const [message, setMessage] = useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Aceites as permissões!");
      }
    } catch (err) {
      console.error('Erro', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      //duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }


  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <VStack space={2}>
          <Text>Gravação nr: {index + 1} - {recordingLine.duration}</Text>
          <HStack space={8}>
            <Pressable
              flex={1}
              padding={2}
              bgColor={"darkBlue.700"}
              borderRadius={8}
              onPress={() => recordingLine.sound.replayAsync()}
            >
              <Center flexDir={"row"}>
                <Ionicons name="play" size={20} color="white" />
                <Text ml={5} textAlign="center" fontSize={"lg"} color="white">
                  Tocar
                </Text>
              </Center>
            </Pressable>
            <Pressable
              flex={1}
              padding={2}
              bgColor={"darkBlue.700"}
              borderRadius={8}
              onPress={() => Sharing.shareAsync(recordingLine.file)}
            >
              <Center flexDir={"row"}>
                <Ionicons name="download" size={20} color="white" />
                <Text ml={5} textAlign="center" fontSize={"lg"} color="white">
                  Salvar
                </Text>
              </Center>
            </Pressable>
          </HStack>
        </VStack>
      );
    });
  }

  return (
    <Box p={5}>
      <Text>{message}</Text>
      <Button
        w={"full"}
        padding={2}
        bgColor={recording ? "red.700" : "darkBlue.700"}
        borderRadius={8}
        onPress={recording ? stopRecording : startRecording}
        endIcon={
          <Ionicons name={recording ? 'pause' : 'mic'} size={20} color="white" />
        }
      >
        <Text ml={5} textAlign="center" fontSize={"lg"} color="white">
          Start Recording
        </Text>
      </Button>
      {getRecordingLines()}
    </Box>
  );
}

export default VoiceRecognition;