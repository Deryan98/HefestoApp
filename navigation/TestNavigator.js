import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './children/HomeNavigator';
import SearchScreen from '../screens/SearchScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {Icon, Input} from 'react-native-elements';

export const TestNavigator = ({navigation}) => {
  const TestStack = createStackNavigator();
  return (
    // <NavigationContainer>
    <TestStack.Navigator initialRouteName="CategoriesScreen">
      <TestStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerTintColor: 'chartreuse',
          title: 'TiendaX',
          headerStyle: {
            //color de la app bar
            backgroundColor: 'black',
          },
          //Color del titulo del header
          //headerTintColor: 'chartreuse',
        }}
      />
      <TestStack.Screen
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
      <TestStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
    </TestStack.Navigator>
    // </NavigationContainer>
  );
};
