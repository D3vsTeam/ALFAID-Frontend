import React from "react";
import { View } from "react-native";
import {PickImage} from '../../components'

export const PageImg = () => {
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <PickImage/>
        </View>
    )
}