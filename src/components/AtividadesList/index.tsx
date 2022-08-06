import React from "react";
import { View,IconButton, Text, Box, VStack, HStack, Heading, Icon, Center, useToast } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export const AddAtividades = () => {
    const navigation = useNavigation();
    const instState = [{
      title: "Code",
      isCompleted: true
    }, {
      title: "Meeting with team at 9",
      isCompleted: false
    }, {
      title: "Check Emails",
      isCompleted: false
    }, {
      title: "Write an article",
      isCompleted: false
    }];

    const [list, setList] = React.useState(instState);
    const [inputValue, setInputValue] = React.useState("");
    const toast = useToast();
  
    const addItem = title => {
      navigation.navigate('MenuTarefas')
      setList(prevList => {
        return [...prevList, {
          title: title,
          isCompleted: false
        }];
      });
    };
  
  
    const handleStatusChange = index => {
      setList(prevList => {
        const newList = [...prevList];
        newList[index].isCompleted = !newList[index].isCompleted;
        return newList;
      });
    };
    const handleDelete = index => {
        setList(prevList => {
          const temp = prevList.filter((_, itemI) => itemI !== index);
          return temp;
        });
      };
  
    return <Center w="100%">
        <Box maxW="300" w="100%" >
          <Heading mb="2" mt="10" size="md">
            Wednesday
          </Heading>
          <VStack space={4}>
            <HStack space={2}>
              <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
              addItem(inputValue);
              setInputValue("");
            }} />
            </HStack>
            <VStack space={2} >
                <View >
              {list.map((item, itemI) => 
              
              <HStack w="100%" justifyContent="space-between" alignItems="center" p={1} borderWidth={1} borderColor={'black'} key={item.title + itemI.toString()}>
                  <Text width="100%" flexShrink={1} textAlign="left" mx="2"  _light={{
                color: item.isCompleted ? "gray.400" : "coolGray.800"
              }} _dark={{
                color: item.isCompleted ? "gray.400" : "coolGray.50"
              }} onPress={() => handleStatusChange(itemI)}>
                    {item.title}
                  </Text>
                  <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
                </HStack>)}
                </View>
            </VStack>
          </VStack>
        </Box>
      </Center>;
  };