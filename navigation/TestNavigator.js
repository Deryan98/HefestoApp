import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './children/HomeNavigator';
import SearchScreen from '../screens/SearchScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {Icon, Input} from 'react-native-elements';

export const TestNavigator = ({route, navigation}) => {
  const TestStack = createStackNavigator();
  const {Store} = route.params;
  return (
    // <NavigationContainer>
    <TestStack.Navigator initialRouteName="CategoriesScreen">
      <TestStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        initialParams={{...route.params}}
        options={{
          headerTintColor: 'chartreuse',
          title: Store.name,
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
