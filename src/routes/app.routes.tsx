import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Form, MenuTarefas, NewActivity, PageAvaliacao, PageFunc, PageImg } from '../screens';
import { Home } from '../screens/Home';
import { ListDocs } from '../screens/ListDocs';
import { Tasks } from '../screens/Tasks';
const { Navigator, Screen } = createNativeStackNavigator();


export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
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
      <Screen
        name='MenuTarefas'
        component={MenuTarefas}
      />
      <Screen
        name='PageImg'
        component={PageImg}
      />
      <Screen
        name='PageFunc'
        component={PageFunc}
      />
      <Screen
        name='PageAvaliacao'
        component={PageAvaliacao}
      />
    </Navigator>
  );
}