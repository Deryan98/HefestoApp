import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WishListScreen from '../../screens/WishListScreen';
import DrawerMenu from '../../components/DrawerMenu';

export const WishListNavigator = ({navigation}) => {
  //Creando WishList Navigator de tipo Stack
  const WishListStack = createStackNavigator();
  //metodo para disparar el icono menu
  const drawerMenuHandler = (navigation) => {
    navigation.openDrawer();
  };

  return (
    <WishListStack.Navigator>
      <WishListStack.Screen
        name="WishList"
        component={WishListScreen}
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
    </WishListStack.Navigator>
  );
};
