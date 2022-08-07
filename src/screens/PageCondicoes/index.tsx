import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { TextArea, Button, Text } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon, Select } from 'native-base';
export const PageCondicoes = () => {
    const navigation = useNavigation();
    const handleSave = () => {
        navigation.goBack()
    }
    let [language, setLanguage] = React.useState<string>('key0');
    return (
        <View style={styled.Container}>


            <Select
                placeholder="Mode of payment"
                selectedValue={language}
                width={150}
                onValueChange={(itemValue: string) => setLanguage(itemValue)}
            >
                <Select.Item label="Chuva" value="key0" />
                <Select.Item label="Solicitação do Cliente" value="key1" />
                <Select.Item label="Falta de Material," value="key2" />
                <Select.Item label="Falta de Equipamento" value="key3" />
                <Select.Item label="atraso de liberação área," value="key4" />
                <Select.Item label="outros" value="key5" />
            </Select>
            {language === 'key5'
                ? <TextArea
                    autoCompleteType={"off"}
                    backgroundColor={"gray.50"}
                    borderColor={"gray.300"}
                    numberOfLines={10}
                    p={4}
                    mt={5}
                    fontSize={14}
                    borderRadius={8}
                    size="4x1"
                    w={"full"}
                    placeholder="Digte as condições enfrentadas..."
                />

                : <Text></Text>}


            {/* <Button
                onPress={handleSave}
                size={"lg"}
                p={4}
                mt={10}
                borderRadius={8}
                colorScheme="success"
                rightIcon={
                    <Ionicons
                        name="checkmark-circle-outline"
                        size={25}
                        color="white"
                    />
                }>
                <Text
                    bold
                    fontSize={"xl"}
                    mr={2}
                    color="white">
                    Salvar
                </Text>
            </Button> */}

        </View>
    )

}


const styled = StyleSheet.create({
    Container: {
        padding: 20,
        alignItems:'center'
    }
})