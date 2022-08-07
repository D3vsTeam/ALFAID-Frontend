import { Box, Button, Center, Flex, HStack, IconButton, Image, Pressable, Text, VStack } from "native-base"
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export const PageImg = () => {
  const [image, setImage] = useState<string>();
  const navigation = useNavigation();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const deleteImage = async () => {
    setImage("")
  }

  return (
    <Box>
      {!image ? (
        <Center
          borderWidth={3}
          borderStyle="dashed"
          borderColor={"gray.200"}
          w={"90%"}
          bgColor={"gray.100"}
          borderRadius={10}
          px={5}
          py={32}
          m={5}
        >
          <Text fontSize={"xl"} >
            Sem imagem
          </Text>
        </Center>
      ) : (
        <Center
          w={"90%"}
          borderRadius={10}
          m={5}
        >
          <Image source={{ uri: image }} style={{ width: 300, height: 300, marginTop: 10 }} />

        </Center>
      )}
      <VStack
        px={5}
        space={5}
      >
        <HStack>
          <Pressable
            flex={1}
            padding={5}
            bgColor={"darkBlue.700"}
            borderRadius={8}
            onPress={pickImage}
          >
            <Center flexDir={"row"}>
              <Ionicons name="cloud-upload" size={20} color="white" />
              <Text ml={5} textAlign="center" fontSize={"lg"} color="white">
                {!image ? "Procurar imagem" : "Alterar Imagem"}
              </Text>
            </Center>
          </Pressable>
          {image &&
            <Button colorScheme={"error"} borderRadius={8} ml={5} flex={.2} onPress={deleteImage}>
              <Ionicons name="trash" size={20} color="white" />
            </Button>
          }
        </HStack>
        <Pressable
          padding={5}
          bgColor={"darkBlue.700"}
          borderRadius={8}
          onPress={() => navigation.navigate("PageCamera")}
        >
          <Center flexDir={"row"}>
            <Ionicons name="camera" size={20} color="white" />
            <Text ml={5} textAlign="center" fontSize={"lg"} color="white" >
              Tirar foto
            </Text>
          </Center>
        </Pressable>
      </VStack>
    </Box>
  )
}
