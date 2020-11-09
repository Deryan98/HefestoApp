import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../../../screens/MapScreen';
import ProductDetailScreen from '../../../screens/ProductDetailScreen';

export const ProductBottomTabs = ({route}) => {
  const ProductBottomTab = createBottomTabNavigator();
  return (
    <ProductBottomTab.Navigator>
      <ProductBottomTab.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        initialParams={{...route.params}}
      />
      <ProductBottomTab.Screen name="ProductMap" component={MapScreen} />
    </ProductBottomTab.Navigator>
  );
};
