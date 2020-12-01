import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './children/HomeNavigator';
import {WishListNavigator} from './children/WishListNavigator';
import {TestNavigator} from './TestNavigator';

export const DrawerNavigator = () => {
  //Creando el DrawerNavigator
  const Drawer = createDrawerNavigator();

  return (
    <>
      {/** Definiendo contenedor padre de navegadores */}
      <NavigationContainer>
        {/** Drawer Navigator para mostrar pantallas principales */}
        <Drawer.Navigator initialRouteName="Home">
          {/** Cargando pantalla principal */}
          <Drawer.Screen
            //definiendo nombre de ruta
            name="Home"
            //componente a cargar en la pantalla
            component={HomeNavigator}
            options={{
              //nombre con el que aparece en el Drawer Menu
              title: 'Pantalla Home',
            }}
          />
          {/** Cargando pantalla lista de deseos */}
          <Drawer.Screen
            name="WishList"
            component={WishListNavigator}
            options={{
              //nombre con el que aparece en el Drawer Menu
              title: 'Lista de deseos',
            }}
          />
          {/* <Drawer.Screen
            name="Store"
            component={TestNavigator}
            options={{
              //nombre con el que aparece en el Drawer Menu
              title: 'Tiendas',
            }}
          /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
