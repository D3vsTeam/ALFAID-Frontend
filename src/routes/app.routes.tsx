import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Form } from '../screens';
import { Home } from '../screens/Home';
import { NewActivity } from '../screens';
import { ListDocs } from '../screens/ListDocs';
import { Tasks } from '../screens/Tasks';
const { Navigator, Screen } = createNativeStackNavigator();


export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        
        
      />
      <Screen
        name='Form'
        component={Form}
      />
      <Screen
        name='NewActivity'
        component={NewActivity}
      />
      <Screen
        name='ListDocs'
        component={ListDocs}
      />
      <Screen
        name='Tasks'
        component={Tasks}
      />
    </Navigator>
  );
}