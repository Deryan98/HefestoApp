import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../../../screens/CategoriesScreen';
import CategoryMealsScreen from '../../../screens/CategoryMealsScreen';
import ProductDetailScreen from '../../../screens/ProductDetailScreen';

export const StoreNavigator = ({route, navigation}) => {
  const {Store} = route.params;
  const StoreStack = createStackNavigator();

  return (
    <StoreStack.Navigator>
      <StoreStack.Screen
        name="StoreScreen"
        component={CategoriesScreen}
        initialParams={{...route.params}}
        options={{
          headerTintColor: 'white',
          title: Store.name,
          headerStyle: {
            //color de la app bar
            backgroundColor: '#14213d',
          },
        }}
      />

      <StoreStack.Screen
        name="ProductsStoreScreen"
        component={CategoryMealsScreen}
        options={{
          headerTintColor: 'white',
          title: 'Productos',
          headerStyle: {
            //color de la app bar
            backgroundColor: '#14213d',
          },
        }}
      />

      <StoreStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
    </StoreStack.Navigator>
  );
};
