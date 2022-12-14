import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/Auth";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => (
  <Navigator>
    <Screen
      name="Login"
      component={Auth}
      options={{
        headerShown: false
      }}
    />
  </Navigator>
)