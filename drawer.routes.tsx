import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
const { Screen, Navigator } = createDrawerNavigator();

import { ScreenA } from './screens/ScreenA';
import { ScreenB } from './screens/ScreenB';



function MyDrawer() {
  return (
   <Navigator>
    <Screen
        name='screenA'
        component={ScreenA}
        options={{
            drawerLabel: 'Home',
            drawerIcon: () => <MaterialIcons name='home' size={22}/>
        }}
    />
    <Screen
        name='screenB'
        component={ScreenB}
        options={{
            drawerLabel: 'Cadastro',
            drawerIcon: () => <MaterialIcons name='add' size={22}/>

        }}
    />
    <Screen
        name='screenC'
        component={ScreenC}
        options={{
            drawerLabel: 'Search',
            drawerIcon: () => <MaterialIcons name='search' size={22}/>

        }}
    />
   </Navigator>
  );
}