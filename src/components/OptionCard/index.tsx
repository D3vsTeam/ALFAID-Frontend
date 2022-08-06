import { Ionicons } from '@expo/vector-icons';
import { Box, Flex, Pressable, Text } from 'native-base';
import React from 'react';

// import { Container } from './styles';

type OptionCardType = {
  heading: string;
  label: string
  icon?: "add"
  onPress: () => void

}

export const OptionCard: React.FC<OptionCardType> = ({ heading, label, icon = "add", onPress }) => {
  
  
  return (
    <Box >
      <Text bold fontSize={"xl"} mb={2}>{heading}</Text>
      <Pressable 
        h={60}
        borderRadius={8}
        p={3}
        borderWidth={1}
        borderColor={"gray.200"}
        bgColor="white"
        onPress={onPress}
      >
        <Flex 
          flex={1}
          flexDirection={"row"} 
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text>{label}</Text>
          <Box p={1} bgColor="alfa" borderRadius={4}>
            <Ionicons name={icon} color={"white"} size={16}/>
          </Box>
        </Flex>
      </Pressable>
    </Box>
  );
}

export default OptionCard;