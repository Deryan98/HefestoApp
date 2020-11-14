import * as React from 'react';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { CatTabs } from './children/CatTabs';
import { ProductBottomTabs } from './children/ProductBottomTabs';
import SearchScreen from '../../screens/SearchScreen';
import ResultsScreen from '../../screens/ResultsScreen';
//importing custom components
import DrawerMenu from '../../components/DrawerMenu';
import { Icon, Input, SearchBar } from 'react-native-elements';
import { event } from 'react-native-reanimated';
//import { toggleWishlist } from '../store/actions/products';

export const HomeNavigator = ({ navigation }) => {
  const HomeStack = createStackNavigator();

  const [inputSearch, setInputSearch] = React.useState('');

  const drawerMenuHandler = (navigation) => {
    navigation.openDrawer();
  };
  const favoritesHandler = (navigation) => {
    //Aqui se hace
    /*const dispatch = useDispatch();

    const toggleWishlistHandler = () => {
      dispatch(toggleWishlist());
    }*/
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
              iconStyle={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="ProductBottomTabs"
        component={ProductBottomTabs}
        options={{
          title: 'Detalles',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            marginLeft: -20,
          },
          headerRight: () => (
            <Icon
              name="star-outline"
              type="material-community"
              size={30}
              color="white"
              onPress={() => favoritesHandler(navigation)}
              iconStyle={{ marginRight: 10 }}
            />
          ),
        }}
      />
      {/* <HomeStack.Screen name="SearchNavigator" component={SearchNavigator} />
      <HomeStack.Screen name="ResultsNavigator" component={ResultsNavigator} /> */}
      <HomeStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      //initialParams={{SearchText: inputSearch}}
      // options={{
      //   headerTintColor: 'chartreuse',
      //   title: (
      // <Input
      //   placeholder="Buscar"
      //   placeholderTextColor="yellowgreen"
      //   selectionColor="yellowgreen"
      //   autoFocus={true}
      //   defaultValue={inputSearch}
      //   onChangeText={(text) => setInputSearch(text)}
      //   onKeyPress={(text) => setInputSearch(text)}
      //   rightIcon={
      //     <Icon
      //       name="search"
      //       type="material"
      //       size={35}
      //       color="green"
      //       iconStyle={{
      //         borderRadius: 30,
      //         backgroundColor: 'chartreuse',
      //       }}
      //       onPress={() => searchingHandler(navigation)}
      //     />
      //   }
      //   inputStyle={{
      //     color: 'chartreuse',
      //     width: '100%',
      //   }}
      //   inputContainerStyle={{
      //     //backgroundColor: 'blue',
      //     width: 250,
      //     justifyContent: 'center',
      //     justifyContent: 'space-between',
      //   }}
      // />
      //   ),
      //   headerStyle: {
      //     //color de la app bar
      //     backgroundColor: 'black',
      //   },
      //   //Color del titulo del header
      //   //headerTintColor: 'chartreuse',
      //   headerTitleStyle: {
      //     //Aplicando estilos al titulo del header
      //     fontWeight: 'normal',
      //     //color: 'chartreuse',
      //     height: '80%',
      //     width: '100%',
      //     backgroundColor: 'green',
      //     borderRadius: 30,
      //     margin: 5,
      //     marginLeft: -15,
      //   },
      //   headerTitleContainerStyle: {
      //     //backgroundColor: 'green',

      //     height: '100%',
      //     width: '75%',
      //   },
      // }}
      />
      <HomeStack.Screen
        name="ResultsScreen"
        component={ResultsScreen}
        initialParams={{ SearchText: inputSearch }}
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
