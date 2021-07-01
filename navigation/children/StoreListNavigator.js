import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StoreListScreen from '../../screens/StoreScreen';
import DrawerMenu from '../../components/DrawerMenu';

export const StoreListNavigator = ({navigation}) => {
  //Creando WishList Navigator de tipo Stack
  const StoreListStack = createStackNavigator();
  //metodo para disparar el icono menu
  const drawerMenuHandler = (navigation) => {
    navigation.openDrawer();
  };
  return (
    <StoreListStack.Navigator>
      <StoreListStack.Screen
        name="StoreList"
        component={StoreListScreen}
        options={{
          //definiendo el titulo de la app
          title: 'Hefesto App',
          headerStyle: {
            //color de la app bar
            backgroundColor: 'black',
          },
          //Color del titulo del header
          headerTintColor: 'white',
          headerTitleStyle: {
            //Aplicando estilos al titulo del header
            fontWeight: 'normal',
            marginLeft: -20,
          },
          headerLeft: () => (
            //colocando icono personalizado a la izquierda del header
            <DrawerMenu
              //evento para cuando se presione el icono menu
              onPress={() => {
                //Metodo para abrir el DrawerMenu
                drawerMenuHandler(navigation);
              }}
            />
          ),
        }}
      />
    </StoreListStack.Navigator>
  );
};
