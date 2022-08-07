import React, { useState } from 'react';

// import { Container } from './styles';

import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import { Button, Text, View, VStack } from 'native-base';

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
        <VStack>
          <Text>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button onPress={() => recordingLine.sound.replayAsync()}>Play</Button>
          <Button onPress={() => Sharing.shareAsync(recordingLine.file)}>Share</Button>
        </VStack>
      );
    });
  }

  return (
    <View>
      <Text>{message}</Text>
      <Button
        onPress={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </Button>
      {getRecordingLines()}
    </View>
  );
}

export default VoiceRecognition;