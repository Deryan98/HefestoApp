import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StoreListScreen from '../../screens/StoreScreen';
import {StoreBottomTabs} from './children/StoreBottomTabs';
import DrawerMenu from '../../components/DrawerMenu';
import SearchStoreScreen from '../../screens/SearchStoreScreen';
import ResultStoreScreen from '../../screens/ResultStoreScreen';

import {Icon, Input, SearchBar} from 'react-native-elements';

export const StoreListNavigator = ({navigation}) => {
  //Creando WishList Navigator de tipo Stack
  const StoreListStack = createStackNavigator();

  const [inputSearch, setInputSearch] = React.useState('');


  const searchHandler = (navigation) => {
    navigation.navigate('SearchStoreScreen');
  };

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
          headerRight: () => (
            <Icon
              name="search"
              type="material"
              size={30}
              color="white"
              onPress={() => searchHandler(navigation)}
              iconStyle={{marginRight: 10}}
            />
          ),
        }}
      />
      <StoreListStack.Screen
        name="StoreBottomTabs"
        component={StoreBottomTabs}
        options={{headerShown: false}}
      />
      <StoreListStack.Screen
        name="SearchStoreScreen"
        component={SearchStoreScreen}
        options={{headerShown: false}}
      />
      <StoreListStack.Screen
        name="ResultStoreScreen"
        component={ResultStoreScreen}
        initialParams={{SearchText: inputSearch}}
        options={{
          headerTintColor: 'chartreuse',
          title: (
            <Input
              placeholder="Buscar                                       "
              placeholderTextColor="yellowgreen"
              //evita que se levante el teclado cuando hago onFocus
              showSoftInputOnFocus={false}
              defaultValue={inputSearch}
              onFocus={() => searchAgain(navigation)}
              leftIcon={
                <Icon
                  name="search"
                  type="material"
                  size={30}
                  color="green"
                  backgroundColor="chartreuse"
                  iconStyle={{
                    borderRadius: 15,
                    width: '100%',
                  }}
                />
              }
              inputStyle={{
                color: 'chartreuse',
                alignContent: 'center',
              }}
              inputContainerStyle={{
                flexDirection: 'row',
                width: '100%',
                height: '100%',
              }}
            />
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontWeight: 'normal',
            height: '80%',
            width: '100%',
            backgroundColor: 'green',
            borderRadius: 30,
            margin: 5,
            marginLeft: -15,
          },
          headerTitleContainerStyle: {
            height: '100%',
            width: '75%',
          },
        }}
      />

    </StoreListStack.Navigator>
  );
};
