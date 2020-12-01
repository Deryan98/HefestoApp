import * as React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {CatTabs} from './children/CatTabs';
import {ProductBottomTabs} from './children/ProductBottomTabs';
import SearchScreen from '../../screens/SearchScreen';
import ResultsScreen from '../../screens/ResultsScreen';
import {StoreNavigator} from './children/StoreNavigator';
import CategoriesScreen from '../../screens/CategoriesScreen';
import CategoryMealsScreen from '../../screens/CategoryMealsScreen';
import ProductDetailScreen from '../../screens/ProductDetailScreen';

//importing custom components
import DrawerMenu from '../../components/DrawerMenu';
import {Icon, Input, SearchBar} from 'react-native-elements';
import {event} from 'react-native-reanimated';

export const HomeNavigator = ({navigation}) => {
  const HomeStack = createStackNavigator();

  const [inputSearch, setInputSearch] = React.useState('');

  const drawerMenuHandler = (navigation) => {
    navigation.openDrawer();
  };
  const searchHandler = (navigation) => {
    navigation.navigate('SearchScreen');
  };
  const searchingHandler = (navigation) => {
    navigation.navigate('ResultsScreen');
  };
  const searchAgain = (navigation) => {
    navigation.goBack();
  };
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={CatTabs}
        options={{
          title: 'Hefesto App',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            marginLeft: -20,
          },
          headerLeft: () => (
            <DrawerMenu
              onPress={() => {
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
      <HomeStack.Screen
        name="StoreNavigator"
        component={StoreNavigator}
        options={{headerShown: false}}
      />
      {/* <HomeStack.Screen
        name="StoreScreen"
        component={CategoriesScreen}
        options={{
          headerTintColor: 'chartreuse',
          title: 'TiendaX',
          headerStyle: {
            //color de la app bar
            backgroundColor: 'black',
          },
        }}
      />

      <HomeStack.Screen
        name="ProductsStoreScreen"
        component={CategoryMealsScreen}
        options={{
          headerTintColor: 'chartreuse',
          title: 'Productos',
          headerStyle: {
            //color de la app bar
            backgroundColor: 'black',
          },
        }}
      />

      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{headerShown: false}}
      /> */}

      <HomeStack.Screen
        name="ProductBottomTabs"
        component={ProductBottomTabs}
        options={{headerShown: false}}
      />
      {/* <HomeStack.Screen name="SearchNavigator" component={SearchNavigator} />
      <HomeStack.Screen name="ResultsNavigator" component={ResultsNavigator} /> */}
      <HomeStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ResultsScreen"
        component={ResultsScreen}
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
    </HomeStack.Navigator>
  );
};
