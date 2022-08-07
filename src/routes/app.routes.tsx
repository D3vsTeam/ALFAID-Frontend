import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Form, MenuTarefas, NewActivity, PageAvaliacao, PageFunc, PageImg, PageProdutos, PageCondicoes } from '../screens';
import { PageCamera } from '../screens/Camera';
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
        options={{
          title: 'Cadastro Equipes'
        }}
        name='Form'
        component={Form}
      />
      <Screen
        options={{
          title: 'Cadastro Equipes'
        }}
        name='NewActivity'
        component={NewActivity}
      />
      <Screen
        options={{
          title: 'Lista Documentos'
        }}
        name='ListDocs'
        component={ListDocs}
      />
      <Screen
        options={{
          title: 'Tarefas'
        }}
        name='Tasks'
        component={Tasks}
      />
      <Screen
        options={{
          title: 'Menu Tarefas'
        }}
        name='MenuTarefas'
        component={MenuTarefas}
      />
      <Screen
        options={{
          title: 'Cadastro Imagem'
        }}
        name='PageImg'
        component={PageImg}
      />
      <Screen
        options={{
          title: 'Cadastro Funcionário'
        }}
        name='PageFunc'
        component={PageFunc}
      />
      <Screen
        options={{
          title: 'Cadastro Avaliação'
        }}
        name='PageAvaliacao'
        component={PageAvaliacao}
      />
      <Screen
        options={{
          title: 'Cadastro Produtos'
        }}
        name='PageProdutos'
        component={PageProdutos}
      />
      <Screen
        options={{
          title: 'Cadastro Condicoes'
        }}
        name='PageCondicoes'
        component={PageCondicoes}
      />
      <Screen
        options={{
          title: 'Cadastro Condicoes'
        }}
        name='PageCamera'
        component={PageCamera}
      />
    </Navigator>
  );
}